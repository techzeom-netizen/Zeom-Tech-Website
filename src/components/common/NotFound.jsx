// components/common/NotFound.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="-mt-12 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#224252] via-[#264752] to-[#2c5364] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-xl"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold text-red-600 mb-4"
        >
          404
        </motion.h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition  "
          >
            <AiOutlineArrowLeft className="w-5 h-5" />
            Go Home
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
