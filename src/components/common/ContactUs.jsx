"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaWhatsapp, FaCheck } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      phone: Yup.number()
        .required("Phone number is required")
        .max(10, "Phone number must be 10 digits")
        .min(10, "Phone number must be 10 digits"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required")
        .email("Enter a valid email"),
      projectTitle: Yup.string().required("Project title is required"),
      message: Yup.string().required("Tell us about your project"),
    }),
    onSubmit: (values) => {
      const message = `Hello ZeomTech, 
Name: ${values.fullName}
Phone: ${values.phone}
Email: ${values.email}
Project: ${values.projectTitle}
Message: ${values.message}`;

      const whatsappNumber = "+918271927132";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`;
      window.open(url, "_blank");
    },
  });

  const { values } = formik;
  const hasContent = values.fullName || values.message || values.projectTitle;

  const renderField = (name, label, type = "text") => (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-[11px] tracking-[0.14em] uppercase font-medium text-[#191a1b] mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-full bg-transparent border-0 border-b-2 border-[#DDE3EC] text-[#101A2B] pb-2 text-[15px] placeholder:text-[#B7BFCC] focus:outline-none focus:border-[#0E9E76] transition-colors"
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="mt-1.5 text-[12px] text-[#D64545] font-mono">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="relative pt-5 pb-12 -mt-5 overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap");
        @keyframes zt-pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.85);
          }
        }
        @keyframes zt-rise {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-36 -left-40 w-[560px] h-[560px] rounded-full bg-[#0e159e] opacity-[0.09] blur-[120px]" />
      {/* <div className="pointer-events-none absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full bg-[#fcfbfd] opacity-[0.08] blur-[120px]" /> */}

      <div className="relative max-w-5xl mx-auto my-6">
        <h1 className="max-w-2xl font-semibold text-[#101A2B] text-3xl md:text-[44px] leading-[1.1] mb-4">
          Let&apos;s build something worth shipping.
        </h1>
        <p className="max-w-xl text-[#5B6779] text-[15px] md:text-base mb-12">
          Tell us about the product you&apos;re picturing. We&apos;ll read it,
          and reply on WhatsApp — no form disappearing into an inbox.
        </p>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {renderField("fullName", "Full name")}
              {renderField("phone", "Phone number")}
              {renderField("email", "Email", "email")}
              {renderField("projectTitle", "Project title")}
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-[11px] tracking-[0.14em] uppercase font-medium text-[#191a1b] mb-2"
              >
                Tell us about your project
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full bg-transparent borde p-2 border-2 border-[#DDE3EC] text-[#101A2B] pb-2 text-[15px] resize-none placeholder:text-[#B7BFCC] focus:outline-none focus:border-[#0E9E76] transition-colors"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1.5 text-[12px] text-[#D64545] font-mono">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-[#0E9E76] hover:bg-[#0B8564] text-white font-medium py-3.5 px-7 rounded-full transition-colors shadow-[0_8px_24px_-8px_rgba(14,158,118,0.5)]"
            >
              <FaWhatsapp className="text-lg" />
              Send via WhatsApp
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          {/* Live WhatsApp preview — the signature element */}
          <div className="rounded-[28px] bg-white border border-[#E7EBF1] p-3 shadow-[0_20px_60px_-30px_rgba(16,26,43,0.25)] lg:sticky lg:top-16">
            <div className="rounded-[20px] bg-[#FAFBFD] overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[#EDF0F5]">
                <div
                  className="w-9 h-9 rounded-full bg-[#0E9E76] flex items-center justify-center font-semibold text-white text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Z
                </div>
                <div>
                  <p className="text-[#101A2B] text-sm font-medium">ZeomTech</p>
                  <p className="text-[#0E9E76] text-[11px] font-mono">online</p>
                </div>
              </div>

              <div className="min-h-[220px] px-4 py-5 flex flex-col justify-end gap-3">
                {hasContent ? (
                  <div
                    className="ml-auto max-w-[85%] bg-[#DCF6E8] rounded-2xl rounded-tr-sm px-4 py-3"
                    style={{ animation: "zt-rise 0.25s ease-out" }}
                  >
                    <p className="text-[rgb(18,53,40)] text-[13px] leading-relaxed whitespace-pre-line font-mono">
                      Hello ZeomTech,{"\n"}
                      {values.fullName && `Name: ${values.fullName}\n`}
                      {values.phone && `Phone: ${values.phone}\n`}
                      {values.email && `Email: ${values.email}\n`}
                      {values.projectTitle &&
                        `Project: ${values.projectTitle}\n`}
                      {values.message && `Description: ${values.message}`}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      <FaCheck
                        className="text-[10px] text-[#4C7A67]"
                        style={{ marginLeft: "-6px" }}
                      />
                      <FaCheck className="text-[10px] text-[#0E9E76]" />
                    </div>
                  </div>
                ) : (
                  <p className="text-[#B7BFCC] text-[13px] font-mono">
                    Your message will show up here as you type — this is exactly
                    what lands on WhatsApp.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
