"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(40000);
  const [propertyTaxes, setPropertyTaxes] = useState(2000);
  const [homeownersInsurance, setHomeownersInsurance] = useState(1000);
  const [hoaFees, setHoaFees] = useState(0);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyMortgage =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const monthlyPropertyTaxes = propertyTaxes / 12;
    const monthlyInsurance = homeownersInsurance / 12;

    const totalMonthlyPayment =
      monthlyMortgage + monthlyPropertyTaxes + monthlyInsurance + hoaFees;

    return totalMonthlyPayment.toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="bg-[#10B981] text-white p-6">
        <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount ($)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (years)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment ($)
            </label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Taxes ($/year)
            </label>
            <input
              type="number"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Homeowners Insurance ($/year)
            </label>
            <input
              type="number"
              value={homeownersInsurance}
              onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HOA Fees ($/month)
            </label>
            <input
              type="number"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
        </div>
        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Estimated Monthly Payment
          </h2>
          <p className="text-4xl font-bold text-[#10B981]">
            ${calculateMortgage()}
          </p>
        </div>
      </div>
    </div>
  );
}
