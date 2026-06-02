import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Users, TrendingDown, Star, ChevronRight, Phone } from "lucide-react";
import { FaqJsonLd } from "@/components/JsonLd";
import SavingsCalculator from "@/components/SavingsCalculator";

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm font-medium text-amber-300">75+ Stores Across South Kerala</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Quality Medicines at{" "}
              <span className="text-amber-400">Up to 60% Discount</span>
            </h1>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8 max-w-2xl">
              Akshaya Community Pharmacy is your trusted partner for affordable healthcare. We supply genuine branded and generic medicines at honest prices — because good health should be accessible to every family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/stores"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Find Nearest Store
              </Link>
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-colors"
              >
                Franchise Opportunity
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: MapPin, number: "75+", label: "Active Stores", color: "text-emerald-600" },
              { icon: Users, number: "50,000+", label: "Happy Customers", color: "text-amber-600" },
              { icon: TrendingDown, number: "15–60%", label: "Medicine Discount", color: "text-emerald-600" },
              { icon: ShieldCheck, number: "3", label: "Districts Covered", color: "text-amber-600" },
            ].map(({ icon: Icon, number, label, color }) => (
              <div key={label} className="flex flex-col items-center py-8 px-4 text-center">
                <Icon className={`w-7 h-7 ${color} mb-2`} />
                <div className={`text-3xl font-extrabold ${color}`}>{number}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Simple Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">How Akshaya Works</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Our supply chain model cuts out unnecessary middlemen so you get medicines at prices that make a real difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Direct Procurement",
                desc: "We source medicines directly from licensed manufacturers and authorised distributors at bulk rates.",
                color: "bg-emerald-50 border-emerald-200",
              },
              {
                step: "02",
                title: "Central Warehouse",
                desc: "A temperature-controlled central warehouse maintains stock quality and ensures constant availability.",
                color: "bg-amber-50 border-amber-200",
              },
              {
                step: "03",
                title: "Franchise Network",
                desc: "Our 75+ franchise stores receive timely supply and operate under strict quality standards.",
                color: "bg-emerald-50 border-emerald-200",
              },
              {
                step: "04",
                title: "Savings Passed On",
                desc: "The savings from direct procurement are passed directly to you — up to 60% off MRP.",
                color: "bg-amber-50 border-amber-200",
              },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className={`rounded-2xl border p-6 flex flex-col gap-4 ${color}`}>
                <div className="text-4xl font-black text-gray-300">{step}</div>
                <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Where We Are</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Serving South Kerala</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From the backwaters of Alappuzha to the capital city of Thiruvananthapuram, Akshaya is close to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { district: "Kollam", stores: "30+", highlight: "Kollam Town, Punalur, Kundara, Karunagappally", icon: "🌊" },
              { district: "Thiruvananthapuram", stores: "25+", highlight: "MG Road, Pattom, Attingal, Varkala, Neyyattinkara", icon: "🏛️" },
              { district: "Alappuzha", stores: "20+", highlight: "Alappuzha Town, Cherthala, Kayamkulam, Mavelikkara", icon: "🚤" },
            ].map(({ district, stores, highlight, icon }) => (
              <Link
                key={district}
                href={`/stores?district=${district}`}
                className="group rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all p-6"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{district}</h3>
                <div className="text-3xl font-extrabold text-emerald-600 mt-1">{stores}</div>
                <div className="text-xs text-gray-400 mt-0.5">stores</div>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{highlight}</p>
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  View stores <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Why Akshaya</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">The Akshaya Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "100% Genuine Medicines", desc: "All medicines are sourced from licensed manufacturers. We never compromise on quality." },
              { icon: TrendingDown, title: "15–60% Off MRP", desc: "Significant savings on every purchase — from OTC medicines to chronic disease medications." },
              { icon: Star, title: "Trained Pharmacists", desc: "Every store is staffed with qualified, licensed pharmacists to guide your purchase." },
              { icon: MapPin, title: "Convenient Locations", desc: "75+ stores across Kollam, Thiruvananthapuram, and Alappuzha — always close to you." },
              { icon: Users, title: "Community First", desc: "We exist to serve the community. Profit is secondary to ensuring healthcare access for all." },
              { icon: ArrowRight, title: "Fast Home Delivery", desc: "Selected outlets offer same-day delivery for chronic patients and elderly customers." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">See the Difference</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                How Much Will You Save?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Most people spend far more on medicines than they need to. Enter any medicine&apos;s MRP and see exactly how much you&apos;d save by buying it at Akshaya Community Pharmacy.
              </p>
              <div className="space-y-3">
                {[
                  { example: "₹500 diabetes medicine", savings: "Save ₹75–300" },
                  { example: "₹200 antibiotic course", savings: "Save ₹30–120" },
                  { example: "₹1,000 cardiac medicine", savings: "Save ₹150–600" },
                ].map(({ example, savings }) => (
                  <div key={example} className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                    <span className="text-gray-600">{example}</span>
                    <span className="font-semibold text-emerald-700">{savings}</span>
                  </div>
                ))}
              </div>
            </div>
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Own a Profitable Pharmacy. Make a Difference.</h2>
            <p className="text-amber-100 text-lg leading-relaxed mb-8">
              Join the Akshaya network and run a proven pharmacy business model. Low investment, strong support, and a community that trusts your store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow-lg text-lg"
              >
                Explore Franchise <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919207856815"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-700/30 border border-white/30 text-white font-semibold rounded-xl hover:bg-amber-700/50 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
