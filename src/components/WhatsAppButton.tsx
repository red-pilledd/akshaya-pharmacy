"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919447012345"; // replace with real number
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi Akshaya Community Pharmacy! I'd like to know more about medicines/franchise opportunities."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bf5b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Expanded label on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-4 text-sm font-semibold">
        Chat with us
      </span>
      <div className="w-14 h-14 flex items-center justify-center shrink-0">
        <MessageCircle className="w-7 h-7 fill-white" />
      </div>
    </a>
  );
}
