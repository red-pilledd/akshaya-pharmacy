import type { Metadata } from "next";
import { Heart, Target, Eye, Award, Users, TrendingDown, ShieldCheck, MapPin } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "https://akshaya-pharmacy.vercel.app/about" },
  description: "Learn about Akshaya Community Pharmacy — our story, mission, and commitment to affordable healthcare in South Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://akshaya-pharmacy.vercel.app" },
        { name: "About Us", url: "https://akshaya-pharmacy.vercel.app/about" },
      ]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Our Story</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
              Empowering Health, Enriching Communities
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Founded on the principles of integrity, accessibility, and care, Akshaya Community Pharmacy has grown from a local drugstore into a trusted retail pharmacy chain. Our mission is simple: to bridge the gap between quality healthcare and the communities that need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Who We Are</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">More Than a Pharmacy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded on the principles of integrity, accessibility, and care, Akshaya Community Pharmacy has grown from a local drugstore into a trusted retail pharmacy chain. Our mission is simple: to bridge the gap between quality healthcare and the communities that need it most.
                </p>
                <p>
                  We don&apos;t just dispense prescriptions; we build relationships. By combining a wide range of healthcare products with expert guidance, we ensure that every neighbourhood we enter receives the highest standard of pharmaceutical care.
                </p>
                <p>
                  As we expand, our core commitment remains unchanged — putting your health and well-being first.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, number: "75+", label: "Stores", color: "bg-emerald-50 text-emerald-700" },
                { icon: Users, number: "50,000+", label: "Customers Served", color: "bg-amber-50 text-amber-700" },
                { icon: TrendingDown, number: "60%", label: "Max Discount", color: "bg-emerald-50 text-emerald-700" },
                { icon: Award, number: "5+", label: "Years of Trust", color: "bg-amber-50 text-amber-700" },
              ].map(({ icon: Icon, number, label, color }) => (
                <div key={label} className={`rounded-2xl p-6 text-center ${color.split(" ")[0]}`}>
                  <Icon className={`w-7 h-7 mx-auto mb-2 ${color.split(" ")[1]}`} />
                  <div className={`text-3xl font-extrabold ${color.split(" ")[1]}`}>{number}</div>
                  <div className="text-sm text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Purpose</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To make quality, genuine medicines accessible to every household in Kerala, regardless of income level. We believe affordable healthcare is not a luxury — it is a right.
              </p>
            </div>
            <div className="bg-emerald-700 rounded-2xl p-8 text-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-emerald-100 leading-relaxed text-sm">
                To build a transparent, ethical pharmacy supply chain that delivers genuine medicines at 15–60% discount — disrupting the status quo to serve the community, not profit from its illness.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To become the most trusted pharmacy network in Kerala — expanding to every district while empowering local entrepreneurs through our franchise model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every medicine on our shelf is sourced from verified, licensed manufacturers. Counterfeit or sub-standard products have no place in our network.", color: "text-emerald-700 bg-emerald-50" },
              { icon: TrendingDown, title: "Radical Transparency", desc: "We show you the MRP, the discount, and what you actually pay. No hidden charges, no confusion.", color: "text-amber-700 bg-amber-50" },
              { icon: Heart, title: "Community Service", desc: "We are part of the community we serve. Our decisions are guided by what is best for our customers — not by profit maximisation.", color: "text-red-600 bg-red-50" },
              { icon: Award, title: "Empowering Partners", desc: "Our franchise model is built to succeed for the store owner, not just the franchisor. We grow together.", color: "text-emerald-700 bg-emerald-50" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color.split(" ")[1]}`}>
                  <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Our Journey</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Milestones That Matter</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200" />
            <div className="space-y-10">
              {[
                { year: "Year 1", title: "First Store Opens in Kollam", desc: "Akshaya launches its flagship pharmacy with a bold promise: 15–50% discount on all medicines.", side: "right" },
                { year: "Year 2", title: "10 Stores, 3 Towns", desc: "Rapid word-of-mouth growth leads to expansion across Kollam district. The franchise model takes shape.", side: "left" },
                { year: "Year 3", title: "Entering Thiruvananthapuram", desc: "We open our first stores in the state capital, bringing affordable medicines to the city and suburbs.", side: "right" },
                { year: "Year 4", title: "50+ Stores & Alappuzha Launch", desc: "Crossing the 50-store milestone, we expand into Alappuzha district to serve the backwater communities.", side: "left" },
                { year: "Today", title: "75+ Stores, 50,000+ Customers", desc: "A growing network of dedicated store owners serving communities across South Kerala every day.", side: "right" },
              ].map(({ year, title, desc, side }) => (
                <div key={year} className={`relative flex gap-8 ${side === "left" ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center z-10 ring-4 ring-emerald-50 ml-0 lg:ml-[calc(50%-1rem)]">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className={`flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm ${side === "left" ? "lg:mr-auto lg:max-w-sm" : "lg:ml-auto lg:max-w-sm"}`}>
                    <div className="text-xs font-bold text-amber-600 tracking-widest uppercase mb-1">{year}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
