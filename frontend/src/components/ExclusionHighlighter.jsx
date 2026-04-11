import { useState } from "react";

export default function ExclusionHighlighter({ notCovered = [], partialCoverage = [] }) {
  const [search, setSearch] = useState("");

  const filtered = (list) =>
    list.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="space-y-6">
      <div className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold text-center">
        ⚠️ These situations are NOT covered by your policy
      </div>

      <input
        type="text"
        placeholder="Search exclusions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered(notCovered).map((item, i) => (
          <div key={i} className="relative bg-red-50 border-l-4 border-red-500 rounded-lg p-4 hover:shadow-md transition-shadow">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">NOT COVERED</span>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{item.icon}</span>
              <h3 className="font-bold text-red-700">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {partialCoverage.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-yellow-700 mt-4">⚡ Partially Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered(partialCoverage).map((item, i) => (
              <div key={i} className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-yellow-700">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {item.covered && <p className="text-green-600 text-xs mt-1">✅ {item.covered}</p>}
                {item.notCovered && <p className="text-red-600 text-xs">❌ {item.notCovered}</p>}
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-sm text-gray-500 text-center">
        {notCovered.length} items not covered, {partialCoverage.length} partially covered
      </p>
    </div>
  );
}