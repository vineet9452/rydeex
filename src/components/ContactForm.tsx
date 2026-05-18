"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center border border-accent-red/30 shadow-[0_0_30px_rgba(221,43,28,0.3)]">
          <CheckCircle2 size={32} className="text-accent-red" />
        </div>
        <h4 className="font-montserrat font-black text-xl text-white">You&apos;re Booked!</h4>
        <p className="text-white/60 text-sm max-w-xs">
          We&apos;ve received your request. Our team will call you within 30 minutes to confirm.
        </p>
      </div>
    );
  }

  // Light, clean inputs with red focus
  const inputBaseClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red outline-none transition-all text-sm font-medium";
  const labelClasses = "block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <input
          type="text" id="name" name="name" required
          placeholder="Rahul Sharma"
          className={inputBaseClasses}
        />
      </div>

      {/* Phone + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel" id="phone" name="phone" required
            placeholder="+91 98765 43210"
            className={inputBaseClasses}
          />
        </div>
        <div>
          <label htmlFor="date" className={labelClasses}>
            Preferred Date
          </label>
          <input
            type="date" id="date" name="date" required
            className={inputBaseClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <input
          type="email" id="email" name="email" required
          placeholder="rahul@example.com"
          className={inputBaseClasses}
        />
      </div>

      {/* Model select */}
      <div>
        <label htmlFor="model" className={labelClasses}>
          Interested Model
        </label>
        <select
          id="model" name="model"
          className={`${inputBaseClasses} appearance-none cursor-pointer`}
        >
          <option value="" className="bg-white text-gray-500">Select a model...</option>
          <option value="X1 Pro" className="bg-white text-gray-900">RYDEEX X1 Pro</option>
          <option value="City Lite" className="bg-white text-gray-900">RYDEEX City Lite</option>
          <option value="RS MAX" className="bg-white text-gray-900">RYDEEX RS MAX</option>
          <option value="Any" className="bg-white text-gray-900">Open to any model</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full border border-transparent bg-accent-red text-white font-black py-3.5 rounded-xl hover:bg-white hover:text-accent-red hover:border-accent-red shadow-[0_4px_14px_rgba(221,43,28,0.4)] hover:shadow-[0_6px_20px_rgba(221,43,28,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-widest uppercase disabled:opacity-60 mt-2 cursor-pointer"
      >
        {status === "submitting" ? (
          <><Loader2 size={18} className="animate-spin" /> Booking…</>
        ) : (
          "Schedule Free Test Ride"
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-center text-sm font-medium">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <p className="text-center text-[11px] text-white/30 uppercase tracking-widest font-semibold mt-4">
        No payment required. We&apos;ll confirm within 30 minutes.
      </p>
    </form>
  );
}
