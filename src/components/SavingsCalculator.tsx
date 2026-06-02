"use client";

import { useState } from "react";
import { Calculator, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [mrp, setMrp] = useState("");
  const [type, setType] = useState<"branded" | "generic">("branded");

  const price = parseFloat(mrp) || 0;
  const discountRange = type === "generic" ? { min: 30, max: 60 } : { min: 15, max: 30 };
  const savingsMin = (price * discountRange.min) / 100;
  const savingsMax = (price * discountRange.max) / 100;
  const payMin = price - savingsMax;
  const payMax = price - savingsMin;

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-emerald-700" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Savings Calculator</h3>
          <p className="text-xs text-gray-500">See how much you save at Akshaya</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Medicine type toggle */}
        <div className="flex rounded-xl overflow-hidden border border-gray-200">
          <button
            onClick={() => setType("branded")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              type === "branded" ? "bg-emerald-700 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Branded
          </button>
          <button
            onClick={() => setType("generic")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              type === "generic" ? "bg-emerald-700 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Generic
          </button>
        </div>

        {/* MRP input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Medicine MRP (₹)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
            <input
              type="number"
              min="0"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              placeholder="Enter MRP printed on pack"
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>
        </div>

        {/* Result */}
        {price > 0 && (
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">Your Savings at Akshaya</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                <div className="text-2xl font-black text-emerald-700">
                  ₹{savingsMin.toFixed(0)}–{savingsMax.toFixed(0)}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">You Save</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                <div className="text-2xl font-black text-gray-900">
                  ₹{payMin.toFixed(0)}–{payMax.toFixed(0)}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">You Pay</div>
              </div>
            </div>
            <p className="text-xs text-emerald-700 mt-3 text-center">
              {discountRange.min}–{discountRange.max}% off on {type} medicines at Akshaya
            </p>
          </div>
        )}

        {!price && (
          <div className="text-center py-4 text-gray-400 text-sm">
            Enter an MRP above to see your savings
          </div>
        )}
      </div>
    </div>
  );
}
