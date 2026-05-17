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
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h4 className="font-montserrat font-black text-xl text-gray-900">You&apos;re Booked!</h4>
        <p className="text-gray-500 text-sm max-w-xs">
          We&apos;ve received your request. Our team will call you within 30 minutes to confirm.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Full Name
        </label>
        <input
          type="text" id="name" name="name" required
          placeholder="Rahul Sharma"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm font-medium"
        />
      </div>

      {/* Phone + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel" id="phone" name="phone" required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm font-medium"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Preferred Date
          </label>
          <input
            type="date" id="date" name="date" required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm font-medium"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email" id="email" name="email" required
          placeholder="rahul@example.com"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm font-medium"
        />
      </div>

      {/* Model select */}
      <div>
        <label htmlFor="model" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Interested Model
        </label>
        <select
          id="model" name="model"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm font-medium"
        >
          <option value="">Select a model...</option>
          <option value="X1 Pro">RYDEEX X1 Pro</option>
          <option value="City Lite">RYDEEX City Lite</option>
          <option value="RS MAX">RYDEEX RS MAX</option>
          <option value="Any">Open to any model</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent-red text-white font-black py-4 rounded-xl hover:bg-red-600 hover:shadow-[0_0_30px_rgba(221,43,28,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide uppercase disabled:opacity-60"
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

      <p className="text-center text-xs text-gray-400">
        No payment required. We&apos;ll confirm within 30 minutes.
      </p>
    </form>
  );
}
