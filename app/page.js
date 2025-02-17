"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GeometricBackground from "./components/GeometricBackground";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <GeometricBackground />
      <main className="flex-grow bg-transparent">
        <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 mx-2">
              <span className="text-[#10B981]">Fin</span>
              <span className="text-[#047857]">Buddy</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#10B981] mb-6">
              Your trusted financial companion for mortgages and affordability
            </h2>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <Link
                href="/mortgage-calculator"
                className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
              >
                <button className="bg-[#10B981] hover:bg-[#047857] text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">
                  Mortgage Calculator
                </h3>
                <p className="text-gray-600 mb-6">
                  Calculate your monthly mortgage payments with ease.
                </p>
                <Link
                  href="/mortgage-calculator"
                  className="text-[#10B981] hover:text-[#047857] transition-colors"
                >
                  Try it now →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">
                  Affordability Calculator
                </h3>
                <p className="text-gray-600 mb-6">
                  Determine how much house you can afford based on your income
                  and expenses.
                </p>
                <Link
                  href="/affordability"
                  className="text-[#10B981] hover:text-[#047857] transition-colors"
                >
                  Check affordability →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">
                  Financing Options
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore various lenders and their current mortgage rates.
                </p>
                <Link
                  href="/financing-options"
                  className="text-[#10B981] hover:text-[#047857] transition-colors"
                >
                  View options →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
