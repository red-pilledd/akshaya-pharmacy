import Link from "next/link";
import { Cross, MapPin, Phone, Mail, Share2, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Cross className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-none">Akshaya</div>
                <div className="text-xs text-amber-400 font-semibold tracking-wide">Community Pharmacy</div>
              </div>
            </div>
            <p className="text-sm text-emerald-300 leading-relaxed">
              Bringing genuine medicines at honest prices to every home across South Kerala. Healthcare for all, not for few.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Share2 className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <AtSign className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/stores", label: "Find a Store" },
                { href: "/franchise", label: "Franchise Opportunity" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-emerald-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h3 className="font-semibold text-white mb-4">Districts We Serve</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Kollam", count: "30+ stores" },
                { label: "Thiruvananthapuram", count: "25+ stores" },
                { label: "Alappuzha", count: "20+ stores" },
              ].map(({ label, count }) => (
                <li key={label} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-sm text-emerald-300">
                    {label} <span className="text-emerald-500">— {count}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-emerald-300">+91 94470 12345</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-emerald-300">info@akshayapharmacy.in</span>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-emerald-300">Head Office, Kollam, Kerala</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-emerald-500">
            &copy; {new Date().getFullYear()} Akshaya Community Pharmacy. All rights reserved.
          </p>
          <p className="text-xs text-emerald-600">
            Licensed under Kerala State Pharmacy Council
          </p>
        </div>
      </div>
    </footer>
  );
}
