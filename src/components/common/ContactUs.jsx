"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {

  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaRegUser,
  FaRocket,
} from "react-icons/fa";

const contactDetails = [
  {
    label: "Email",
    value: "techzeom@gmail.com",
    icon: FaEnvelope,
    href: "mailto:techzeom@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8271927132",
    icon: FaPhoneAlt,
    href: "tel:+918271927132",
  },
  {
    label: "Location",
    value: "Bengaluru, Karnataka",
    icon: FaMapMarkerAlt,
  },
];

const responseSteps = [
  "We read your project notes carefully.",
  "We clarify scope, timeline, and priorities.",
  "We suggest the next practical move.",
];

const ContactUs = () => {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function playSuccessTone() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.42);
    gainNode.connect(audioContext.destination);

    [659.25, 880].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(
        frequency,
        audioContext.currentTime + index * 0.12
      );
      oscillator.connect(gainNode);
      oscillator.start(audioContext.currentTime + index * 0.12);
      oscillator.stop(audioContext.currentTime + index * 0.12 + 0.18);
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status.type !== "success" || !status.message) return undefined;

    const timer = window.setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [status.type, status.message]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      projectTitle: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      projectTitle: Yup.string().required("Project title is required"),
      message: Yup.string().required("Tell us about your project"),
    }),
    onSubmit: async (values, helpers) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.fullName,
            phone: values.phone,
            email: values.email,
            company: values.projectTitle,
            message: values.message,
            source: "ZeomTech Contact Form",
          }),
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          const apiErrors = data?.errors || {};
          const nextErrors = {};

          if (apiErrors.name) nextErrors.fullName = apiErrors.name;
          if (apiErrors.phone) nextErrors.phone = apiErrors.phone;
          if (apiErrors.email) nextErrors.email = apiErrors.email;
          if (apiErrors.company) nextErrors.projectTitle = apiErrors.company;
          if (apiErrors.message) nextErrors.message = apiErrors.message;

          if (Object.keys(nextErrors).length > 0) {
            helpers.setErrors(nextErrors);
          }

          throw new Error(
            data?.message || "Unable to send your message right now."
          );
        }

        helpers.resetForm();
        playSuccessTone();
        setStatus({
          type: "success",
          message: "Thanks! Your message was sent successfully.",
        });
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const hasError = (name) => formik.touched[name] && formik.errors[name];

  const inputClass = (name) =>
    `w-full rounded-md border bg-white px-4 py-3.5 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 ${
      hasError(name)
        ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        : "border-slate-200 hover:border-[#8EBEFF] focus:border-[#0B4DB8] focus:ring-4 focus:ring-[#8EBEFF]/35"
    }`;

  const renderError = (name) =>
    hasError(name) ? (
      <p className="mt-1.5 text-xs font-semibold text-red-600">
        {formik.errors[name]}
      </p>
    ) : null;

  const renderInput = ({
    name,
    label,
    icon: Icon,
    type = "text",
    placeholder,
    props = {},
  }) => (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
      >
        <Icon className="h-4 w-4 text-[#0B4DB8]" />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={inputClass(name)}
        aria-invalid={Boolean(hasError(name))}
        {...props}
      />
      {renderError(name)}
    </div>
  );

  return (
    <section
      id="lets-connect"
      data-no-auto-reveal
      data-no-site-grid
      className="contact-section relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 -mt-6"
    >
      <div className="absolute inset-x-0 top-0 h-[56%] bg-[#F4F8FF]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[56%] bg-[linear-gradient(135deg,rgba(47,128,237,0.18),transparent_42%),linear-gradient(90deg,rgba(11,77,184,0.07)_1px,transparent_1px),linear-gradient(rgba(11,77,184,0.07)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div
            data-scroll-reveal="left"
            className="hidden text-[#031735] lg:sticky lg:top-28 lg:block"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-[#8EBEFF]/70 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B4DB8] shadow-sm">
              <FaRocket className="h-4 w-4" />
              Start Here
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight text-[#031735] sm:text-5xl lg:text-6xl">
              Let&apos;s build something worth shipping.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Tell us about the product you&apos;re picturing. We&apos;ll read
              it, and reply on WhatsApp - no form disappearing into an inbox.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactDetails.map(({ label, value, icon: Icon, href }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#EAF3FF] text-[#0B4DB8]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                        {label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-bold text-[#031735]">
                        {value}
                      </span>
                    </span>
                  </>
                );

                const className =
                  "contact-info-card flex min-h-[78px] items-center gap-3 rounded-md border border-blue-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#8EBEFF] hover:shadow-md";

                return href ? (
                  <a key={label} href={href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-next-card mt-8 rounded-md border border-blue-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0B4DB8]">
                What happens next
              </p>
              <div className="mt-4 grid gap-3">
                {responseSteps.map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#0B4DB8]" />
                    <p className="text-sm leading-6 text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            data-scroll-reveal="right"
            noValidate
            onSubmit={formik.handleSubmit}
            className={`contact-form rounded-md border bg-white p-5 shadow-[0_28px_90px_-40px_rgba(3,23,53,0.45)] sm:p-7 lg:p-8 ${
              status.type === "success" ? "border-emerald-400" : "border-slate-200"
            }`}
          >
            <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0B4DB8]">
                  Project Details
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#031735]">
                  Send Message
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Share the essentials. We will pick up the conversation with a
                  clear response.
                </p>
              </div>
              <div className="flex w-fit items-center gap-2 rounded-md bg-[#EAF3FF] px-3 py-2 text-xs font-bold text-[#063B8F]">
                <FaClock className="h-3.5 w-3.5" />
                24 hour reply
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {renderInput({
                name: "fullName",
                label: "Full name",
                icon: FaRegUser,
                placeholder: "Your name",
                props: { autoComplete: "name" },
              })}

              {renderInput({
                name: "phone",
                label: "Phone number",
                icon: FaPhoneAlt,
                type: "tel",
                placeholder: "9876543210",
                props: {
                  autoComplete: "tel",
                  inputMode: "numeric",
                  maxLength: 10,
                  pattern: "[0-9]{10}",
                },
              })}

              {renderInput({
                name: "email",
                label: "Email",
                icon: FaEnvelope,
                type: "email",
                placeholder: "you@example.com",
                props: { autoComplete: "email" },
              })}

              {renderInput({
                name: "projectTitle",
                label: "Project title",
                icon: FaRocket,
                placeholder: "Website, app, software...",
              })}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
                >
                  <FaRegCommentDots className="h-4 w-4 text-[#0B4DB8]" />
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="What are you building, what is ready, and what do you need help with?"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`${inputClass("message")} resize-none`}
                  aria-invalid={Boolean(hasError("message"))}
                />
                {renderError("message")}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-slate-500">
                By sending this, you are starting a direct project conversation
                with the ZeomTech team.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#0B4DB8] px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#063B8F] focus:outline-none focus:ring-4 focus:ring-[#8EBEFF]/45"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[#0B4DB8] transition-transform group-hover:translate-x-1">
                </span>
              </button>
            </div>

            {status.message && (
              <div
                role="status"
                className={`mt-5 rounded-md border px-4 py-3 text-sm font-bold ${
                  status.type === "success"
                    ? "contact-status-success border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
