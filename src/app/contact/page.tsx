import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Akshaya Community Pharmacy. Reach us for medicine inquiries, franchise questions, or feedback.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Reach Us</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-4">We&apos;d Love to Hear From You</h1>
            <p className="text-emerald-100 text-lg">
              Whether you have a question about a medicine, want to explore our franchise opportunity, or just want to share feedback — we are here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm">Our team is available Monday to Saturday, 9 AM to 6 PM.</p>
              </div>

              {[
                { icon: Phone, label: "Phone", value: "+91 94470 12345", href: "tel:+919447012345" },
                { icon: Mail, label: "Email", value: "info@akshayapharmacy.in", href: "mailto:info@akshayapharmacy.in" },
                { icon: MapPin, label: "Head Office", value: "Main Road, Kollam Town, Kerala 691001", href: null },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-gray-900 hover:text-emerald-700">{value}</a>
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Districts quick links */}
              <div className="p-5 bg-emerald-700 rounded-2xl text-white">
                <h3 className="font-bold mb-3">Store-Specific Enquiries?</h3>
                <p className="text-emerald-200 text-sm mb-4">
                  For questions about a specific store — stock availability, delivery, or timings — please call that store directly.
                </p>
                <a href="/stores" className="inline-flex items-center gap-1.5 text-amber-300 text-sm font-semibold hover:text-white transition-colors">
                  Find store phone numbers →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">We&apos;ll respond within 24 hours on working days.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map embed (Kollam HO) */}
      <section className="h-72 w-full">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.5941%2C8.8732%2C76.6341%2C8.9132&layer=mapnik&marker=8.8932%2C76.6141"
          className="w-full h-full border-0"
          title="Akshaya Community Pharmacy Head Office Location"
          loading="lazy"
        />
      </section>
    </>
  );
}
