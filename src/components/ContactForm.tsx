"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

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
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
        <p className="text-gray-500 max-w-sm text-sm">We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="text-sm text-emerald-700 font-medium hover:underline">
          Send another message
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
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          />
        </div>
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
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
        <select
          required name="subject" value={form.subject} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white"
        >
          <option value="">Select a subject</option>
          <option>Medicine Inquiry</option>
          <option>Franchise Inquiry</option>
          <option>Complaint / Feedback</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea
          required name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call us directly.</p>
      )}

      <button
        type="submit" disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
      >
        {status === "sending" ? "Sending…" : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}
