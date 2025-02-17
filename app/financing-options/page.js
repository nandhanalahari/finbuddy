import LenderCard from "../components/LenderCard";

export default function FinancingOptions() {
  const lenders = [
    {
      name: "Green Bank",
      rate: 3.25,
      term: 30,
      website: "https://www.greenbank.com",
    },
    {
      name: "Eco Credit Union",
      rate: 3.1,
      term: 30,
      website: "https://www.ecocreditunion.com",
    },
    {
      name: "Sustainable Lender",
      rate: 3.4,
      term: 15,
      website: "https://www.sustainablelender.com",
    },
    {
      name: "Community Bank",
      rate: 3.35,
      term: 30,
      website: "https://www.communitybank.com",
    },
    {
      name: "Green Mortgage Co.",
      rate: 3.2,
      term: 20,
      website: "https://www.greenmortgage.com",
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
