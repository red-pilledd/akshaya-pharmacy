import type { Metadata } from "next";
import { TrendingUp, Users, Truck, BarChart3, ShieldCheck, Phone, CheckCircle } from "lucide-react";
import FranchiseForm from "@/components/FranchiseForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "https://akshaya-pharmacy.vercel.app/franchise" },
  title: "Franchise Opportunity",
  description: "Own an Akshaya Community Pharmacy franchise. Low investment, proven model, and full support. Join 75+ store owners across South Kerala.",
};

export default function FranchisePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://akshaya-pharmacy.vercel.app" },
        { name: "Franchise Opportunity", url: "https://akshaya-pharmacy.vercel.app/franchise" },
      ]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-200 tracking-widest uppercase">Join Our Network</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
              Own a Pharmacy Business That Serves Your Community
            </h1>
            <p className="text-amber-100 text-lg leading-relaxed mb-8">
              The Akshaya franchise model is built for first-time business owners and experienced retailers alike. You get a trusted brand, full supply support, and training — we handle the complexity so you can focus on customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow">
                Apply Now
              </a>
              <a href="tel:+919447012345" className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-800/40 border border-white/30 text-white font-semibold rounded-xl hover:bg-amber-800/60 transition-colors">
                <Phone className="w-5 h-5" /> Call to Discuss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why franchise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Why Akshaya</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">A Business Model That Works</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Pharmacy is one of the most recession-proof businesses in India. With Akshaya&apos;s discount model, you attract customers that other pharmacies can&apos;t retain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "High Customer Retention", desc: "Patients with chronic conditions come back every month. The discount model creates loyalty that keeps footfall consistent." },
              { icon: Users, title: "Ready Brand Trust", desc: "Akshaya is already trusted by 50,000+ customers. You benefit from existing reputation from day one." },
              { icon: Truck, title: "Reliable Supply Chain", desc: "Stock is delivered directly to your store from our central warehouse. No sourcing, no supplier negotiations." },
              { icon: BarChart3, title: "Business Training", desc: "Full onboarding training, software system, and ongoing operational support from our team." },
              { icon: ShieldCheck, title: "Regulatory Guidance", desc: "We guide you through all pharmacy licensing, compliance, and documentation — reducing the bureaucratic burden." },
              { icon: CheckCircle, title: "Exclusive Territory", desc: "Each franchise receives a defined territory with no overlapping Akshaya stores, protecting your market." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-amber-200 transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">How to Join Akshaya</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Submit Inquiry", desc: "Fill the form below or call us. Share your district and location preference." },
              { step: "2", title: "Initial Discussion", desc: "Our franchise team contacts you within 2 days for a detailed conversation." },
              { step: "3", title: "Site Evaluation", desc: "We jointly evaluate your proposed location for footfall and market potential." },
              { step: "4", title: "Agreement & Setup", desc: "Sign the franchise agreement. We help with setup, interior, and stock loading." },
              { step: "5", title: "Launch & Operate", desc: "Open your store with our team present. Training continues for 30 days post-launch." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {step}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Requirements</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">What You Need to Get Started</h2>
              <div className="space-y-4">
                {[
                  { req: "Licensed Pharmacist", detail: "A B.Pharm or D.Pharm graduate must be on staff (can be employed)." },
                  { req: "Shop Space", detail: "Minimum 200–400 sq. ft. in a commercially accessible location." },
                  { req: "Pharmacy License", detail: "State Drug License from Kerala State Pharmacy Council (we assist with the process)." },
                  { req: "Initial Investment", detail: "Covers franchise fee, interior setup, and opening stock. Contact us for current rates." },
                  { req: "Working Capital", detail: "Sufficient working capital to sustain operations for the first 3 months." },
                ].map(({ req, detail }) => (
                  <div key={req} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{req}</div>
                      <div className="text-sm text-gray-500">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What We Provide</h3>
              <p className="text-gray-500 text-sm mb-6">As your franchise partner, Akshaya takes care of the hardest parts.</p>
              <div className="space-y-3">
                {[
                  "Brand name, signage, and visual identity",
                  "Comprehensive onboarding and staff training",
                  "Pharmacy management software",
                  "Direct stock delivery from central warehouse",
                  "Marketing materials and local campaign support",
                  "Ongoing operational support and troubleshooting",
                  "Access to our network of 75+ stores for best practices",
                  "Regulatory and compliance guidance",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Get Started</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Apply for a Franchise</h2>
            <p className="text-gray-500 mt-3">
              Fill in your details below and our franchise team will reach out within 2 business days.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <FranchiseForm />
          </div>
        </div>
      </section>
    </>
  );
}
