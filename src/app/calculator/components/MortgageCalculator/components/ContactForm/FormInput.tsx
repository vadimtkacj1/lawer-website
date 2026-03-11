"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
  touched: boolean;
}

export default function FormInput({ error, touched, ...props }: FormInputProps) {
  return (
    <div className="w-full">
      <input
        {...props}
        className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-right text-blue-dk font-bold shadow-sm outline-none transition-all placeholder:text-blue-dk/40 ${
          error && touched
            ? "border-red-500"
            : "border-transparent focus:border-orange/30"
        }`}
      />
      <div className="min-h-[1.25rem] mt-1 text-right">
        <AnimatePresence>
          {error && touched && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="block text-red-500 text-xs font-bold"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

