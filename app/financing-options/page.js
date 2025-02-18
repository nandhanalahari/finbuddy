import LenderCard from "../components/LenderCard";

export default function FinancingOptions() {
  const lenders = [
    {
      name: "Digital Credit Union",
      rate: 6.375,
      term: 30,
      website:
        "https://www.dcu.org/borrow/mortgage-loans/home-mortgage-loans.html#mortgage-rates-table-item-a033872e2d-tab",
    },
    {
      name: "Digital Credit Union",
      rate: 6.0,
      term: 20,
      website:
        "https://www.dcu.org/borrow/mortgage-loans/home-mortgage-loans.html#mortgage-rates-table-item-a033872e2d-tab",
    },
    {
      name: "Chase Bank",
      rate: 6.625,
      term: 30,
      website: "https://www.chase.com/personal/mortgage/mortgage-rates",
    },
    {
      name: "Chase Bank",
      rate: 5.875,
      term: 15,
      website: "https://www.chase.com/personal/mortgage/mortgage-rates",
    },
    {
      name: "Wells Fargo Bank",
      rate: 6.875,
      term: 30,
      website: "https://www.wellsfargo.com/mortgage/rates/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#10B981]">
        Financing Options
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lenders.map((lender, index) => (
          <LenderCard key={index} {...lender} />
        ))}
      </div>
      <p className="mt-12 text-sm text-gray-600 text-center">
        Note: These rates are for illustrative purposes only. Actual rates may
        vary based on your credit score, loan amount, and other factors. Please
        contact the lenders directly for the most up-to-date and accurate
        information.
      </p>
    </div>
  );
}
