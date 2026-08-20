import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?!([0-9])\1{9})[6-9]\d{9}$/;
const messageSeparator = "\u2501".repeat(14);
const notProvidedText = "Not provided";

function asString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeTelegramHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatValue(value) {
  return escapeTelegramHtml(value || notProvidedText);
}

function getSubmissionTime(date = new Date()) {
  const timeZone = "Asia/Kolkata";
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    timeZone,
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  });

  return {
    date: dateFormatter.format(date),
    time: timeFormatter.format(date),
  };
}

function normalizeIndianPhone(phone) {
  const digits = phone?.replace(/[^\d]/g, "") || "";

  if (!digits) return "";
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) {
    return `91${digits.slice(1)}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) return digits;

  return digits;
}

function formatPhoneForDisplay(phone) {
  const normalizedPhone = normalizeIndianPhone(phone);

  if (!normalizedPhone) return notProvidedText;
  if (normalizedPhone.startsWith("91") && normalizedPhone.length === 12) {
    return `+${normalizedPhone.slice(0, 2)} ${normalizedPhone.slice(2)}`;
  }

  return phone || notProvidedText;
}

function createWhatsAppUrl(payload) {
  const phone = normalizeIndianPhone(payload.phone);
  if (!phone) return undefined;

  const message = ["Hi,", payload.name].join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function createMailToUrl(payload) {
  const subject = "Re: ZeomTech Project Request";
  const body = [`Hi ${payload.name},`, "", "Thank you for reaching out."].join(
    "\n"
  );

  return `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

function createGmailComposeUrl(payload) {
  return `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(
    createMailToUrl(payload)
  )}`;
}

function createInlineKeyboard(payload) {
  const buttons = [];
  const whatsappUrl = createWhatsAppUrl(payload);

  if (whatsappUrl) {
    buttons.push({
      text: "🗫 WhatsApp",
      url: whatsappUrl,
    });
  }

  buttons.push({
    text: "✉︎ Email ",
    url: createGmailComposeUrl(payload),
  });

  const normalizedPhone = normalizeIndianPhone(payload.phone);
  if (normalizedPhone) {
    buttons.push({
      text: "☎︎ Call",
      url: `https://wa.me/${normalizedPhone}`,
    });
  }

  return {
    inline_keyboard: [
      buttons.slice(0, 2),
      ...buttons.slice(2).map((button) => [button]),
    ].filter((row) => row.length > 0),
  };
}

function validatePayload(body) {
  const payload = {
    name: asString(body?.name),
    company: asString(body?.company),
    email: asString(body?.email),
    phone: asString(body?.phone),
    message: asString(body?.message),
    source: asString(body?.source) || "ZeomTech Website",
  };
  const errors = {};

  if (!payload.name) errors.name = "Full name is required.";

  if (!payload.email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(payload.email)) {
    errors.email = "Enter a valid email.";
  }

  if (!payload.phone) {
    errors.phone = "Phone number is required.";
  } else if (!phonePattern.test(payload.phone)) {
    errors.phone = "Enter a valid 10 digit mobile number.";
  }

  if (!payload.company) errors.company = "Project title is required.";
  if (!payload.message) errors.message = "Tell us about your project.";

  return { payload, errors };
}

function createTelegramMessage(payload) {
  const submittedAt = getSubmissionTime();
  const phoneUrl = createWhatsAppUrl(payload);
  const phoneText = escapeTelegramHtml(formatPhoneForDisplay(payload.phone));
  const phone = phoneUrl
    ? `<a href="${escapeTelegramHtml(phoneUrl)}">${phoneText}</a>`
    : phoneText;

  return [
    "\u{1F4BC} <b>New ZeomTech Project Request</b>",
    "",
    "\u{1F464} <b>Contact Details</b>",
    `\u2022 <b>Name:</b> ${formatValue(payload.name)}`,
    `\u2022 <b>Project:</b> ${formatValue(payload.company)}`,
    `\u2022 <b>Email:</b> ${formatValue(payload.email)}`,
    `\u2022 <b>Phone:</b> ${phone}`,
    "",
    "\u{1F4DD} <b>Project Message</b>",
    messageSeparator,
    formatValue(payload.message),
    "",
    "\u{1F552} <b>Submission Info</b>",
    `\u2022 <b>Date:</b> ${escapeTelegramHtml(submittedAt.date)}`,
    `\u2022 <b>Time:</b> ${escapeTelegramHtml(submittedAt.time)}`,
    `\u2022 <b>Source:</b> ${formatValue(payload.source)}`,
    "",
    messageSeparator,
    "\u2B50 <i>A new opportunity has arrived. Please respond promptly.</i>",
  ].join("\n");
}

export async function POST(request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const body = await request.json().catch(() => null);
  const { payload, errors } = validatePayload(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Please check the form fields.", errors },
      { status: 400 }
    );
  }

  if (!botToken || !chatId) {
    return NextResponse.json(
      {
        message: "Contact delivery is not configured yet.",
        errors: { telegram: "Missing Telegram configuration." },
      },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: createTelegramMessage(payload),
          parse_mode: "HTML",
          disable_web_page_preview: true,
          reply_markup: createInlineKeyboard(payload),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return NextResponse.json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(
      "Telegram sendMessage failed:",
      error instanceof Error ? error.message : "Unknown Telegram error."
    );

    return NextResponse.json(
      {
        message: "Unable to send your request right now. Please try again.",
        errors: { telegram: "Telegram delivery failed." },
      },
      { status: 502 }
    );
  }
}
