"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [monthlyDebts, setMonthlyDebts] = useState(1000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(50000);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [homeownersInsuranceRate, setHomeownersInsuranceRate] = useState(0.5);
  const [pmiRate, setPmiRate] = useState(0.5);
  const [hoaFees, setHoaFees] = useState(0);

  const calculateAffordability = () => {
    const monthlyPaymentRatio = 0.28; // 28% of gross monthly income
    const debtToIncomeRatio = 0.36; // 36% of gross monthly income

    const maxMonthlyPayment = monthlyIncome * monthlyPaymentRatio;
    const maxTotalMonthlyDebt = monthlyIncome * debtToIncomeRatio;

    const availableForMortgage = maxTotalMonthlyDebt - monthlyDebts;

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate maximum loan amount
    const maxLoanAmount =
      (availableForMortgage *
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));

    // Calculate maximum home price
    const maxHomePrice =
      (maxLoanAmount + downPayment) /
      (1 +
        propertyTaxRate / 100 +
        homeownersInsuranceRate / 100 +
        (downPayment / (maxLoanAmount + downPayment) < 0.2
          ? pmiRate / 100
          : 0));

    return maxHomePrice.toFixed(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8"
    >
      <div className="bg-[#10B981] text-white p-6">
        <h1 className="text-3xl font-bold">Affordability Calculator</h1>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gross Monthly Income ($)
            </label>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Debt Payments ($)
            </label>
            <input
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
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
              Property Tax Rate (%)
            </label>
            <input
              type="number"
              value={propertyTaxRate}
              onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
              step="0.1"
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Homeowners Insurance Rate (%)
            </label>
            <input
              type="number"
              value={homeownersInsuranceRate}
              onChange={(e) =>
                setHomeownersInsuranceRate(Number(e.target.value))
              }
              step="0.1"
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#10B981] focus:border-[#10B981] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PMI Rate (%)
            </label>
            <input
              type="number"
              value={pmiRate}
              onChange={(e) => setPmiRate(Number(e.target.value))}
              step="0.1"
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
        <motion.div
          className="mt-8 bg-gray-100 p-6 rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Estimated Maximum Home Price
          </h2>
          <p className="text-4xl font-bold text-[#10B981]">
            ${calculateAffordability()}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
