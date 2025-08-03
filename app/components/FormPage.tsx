"use client";

import React from "react";
import LoginForm from "./LoginForm";
import Tickersvg from "@/public/svg/Tickersvg";
import { GridBackgroundDemo } from "./GridBackground";
import { motion } from "framer-motion";

const FormPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-white via-blue-100 to-white">
      
      {/* OGL Canvas Background */}
      <div className="absolute inset-0 z-0">
        <GridBackgroundDemo />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 px-6">
        {/* Animate heading left to right */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl mx-auto md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight"
        >
          Study Abroad <br /> Consultants in Delhi
        </motion.h2>

        <div className="space-y-2 mx-[100] text-black text-base sm:text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <Tickersvg />
            Courses starting from <span className="font-semibold">₹8 Lakhs*</span>
          </div>    
          <div className="flex items-center gap-2">
            <Tickersvg />
            Scholarship worth <span className="font-semibold">₹10,00,000*</span>
          </div>
          <div className="flex items-center gap-2">
            <Tickersvg />
            Offer letter in less than <span className="font-semibold">48 hours*</span>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 z-10 px-6">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
