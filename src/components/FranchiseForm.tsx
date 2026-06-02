"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function FranchiseForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", district: "", location: "", experience: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", district: "", location: "", experience: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle className="w-9 h-9 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Inquiry Received!</h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for your interest in the Akshaya franchise. Our team will contact you within 2 business days.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-emerald-700 font-medium hover:underline">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            required name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input
            required name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred District *</label>
          <select
            required name="district" value={form.district} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select district</option>
            <option>Kollam</option>
            <option>Thiruvananthapuram</option>
            <option>Alappuzha</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Proposed Location / Area</label>
          <input
            name="location" value={form.location} onChange={handleChange}
            placeholder="e.g. Kundara Town, Kollam"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Relevant Experience</label>
          <select
            name="experience" value={form.experience} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select experience</option>
            <option>Pharmacy / Healthcare</option>
            <option>Retail Business</option>
            <option>Other Business</option>
            <option>No prior experience</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us more about your interest or any questions you have..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call us directly at +91 92078 56815.</p>
      )}

      <button
        type="submit" disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors shadow-sm"
      >
        {status === "sending" ? "Sending…" : <><Send className="w-4 h-4" /> Submit Franchise Inquiry</>}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We&apos;ll contact you within 2 business days. Your information is kept strictly confidential.
      </p>
    </form>
  );
}
