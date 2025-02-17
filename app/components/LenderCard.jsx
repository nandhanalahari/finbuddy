import Link from "next/link";

export default function LenderCard({ name, rate, term, website }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: "#10B981" }}>
        {name}
      </h2>
      <p className="text-gray-600 mb-2">
        Interest Rate: <span className="font-semibold">{rate}%</span>
      </p>
      <p className="text-gray-600 mb-4">
        Loan Term: <span className="font-semibold">{term} years</span>
      </p>
      <Link
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#10B981] text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
      >
        Visit Website
      </Link>
    </div>
  );
}
