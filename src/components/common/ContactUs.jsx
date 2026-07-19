"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaWhatsapp } from "react-icons/fa";

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
      fullName: Yup.string().required("Full Name is required"),
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      projectTitle: Yup.string().required("Project title is required"),
      message: Yup.string().required("Project description is required"),
    }),
    onSubmit: (values) => {
      // Create message without %0A line breaks, using proper WhatsApp line breaks instead
      const message = `Hello ZeomTech, 
Name: ${values.fullName}
Phone: ${values.phone}
Email: ${values.email}
Project: ${values.projectTitle}
Message: ${values.message}`;

      const whatsappNumber = "+918404901905";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    },
  });

  return (
    <div className="brand-hero pb-16 min-h-screen flex flex-col justify-center items-center px-4 py-4 md:py-10 md:-mt-32 lg:-mt-10">
      <div className="text-center text-white mb-10">
        <h3 className="text-lg font-medium mb-2">Contact Us</h3>
        <h1 className="text-xl md:text-3xl font-bold max-w-2xl">
          "Let's Create Magic Together - Start Your Project Today!"
        </h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="brand-panel w-full max-w-4xl rounded-2xl p-5 md:p-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="p-4 rounded-lg w-full text-[#031735] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#8EBEFF]"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-white text-sm mt-1">
                {formik.errors.fullName}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="p-4 rounded-lg w-full text-[#031735] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#8EBEFF]"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-white text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-4 rounded-lg w-full text-[#031735] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#8EBEFF]"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-white text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="projectTitle"
              placeholder="New Project*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectTitle}
              className="p-4 rounded-lg w-full text-[#031735] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#8EBEFF]"
            />
            {formik.touched.projectTitle && formik.errors.projectTitle && (
              <p className="text-white text-sm mt-1">
                {formik.errors.projectTitle}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="p-4 rounded-lg w-full text-[#031735] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#8EBEFF]"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-white text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        <p className="text-white text-center mt-8 mb-6 max-w-3xl mx-auto hidden md:block">
          We have the confidence and expertise to challenge the status-quo.
          Let's collaborate to take your product to new heights.
        </p>

        <div className="text-center pb-8 pt-3 md:pt-0 flex justify-center">
          <button
            type="submit"
            className="bg-[#0B4DB8] text-white py-3 px-8 rounded-md transition-all hover:bg-[#063B8F] flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            <FaWhatsapp className="text-xl" />
            Send via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
