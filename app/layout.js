import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinBuddy",
  description: "Your financial companion for mortgages and affordability",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <a href="/" className="text-[#10B981] text-2xl font-bold">
                <span className="text-[#10B981]">Fin</span>
                <span className="text-[#047857]">Buddy</span>
              </a>
              <div className="space-x-6">
                <Link
                  href="/mortgage-calculator"
                  className="text-gray-600 hover:text-[#10B981] transition-colors duration-300 font-medium relative group"
                >
                  Mortgage Calculator
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#10B981] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="/affordability"
                  className="text-gray-600 hover:text-[#10B981] transition-colors duration-300 font-medium relative group"
                >
                  Affordability
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#10B981] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="/financing-options"
                  className="text-gray-600 hover:text-[#10B981] transition-colors duration-300 font-medium relative group"
                >
                  Financing Options
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#10B981] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </nav>
          <main className="flex-grow pb-16">{children}</main>
          <footer className="bg-[#10B981] text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
              &copy; {new Date().getFullYear()} FinBuddy. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
