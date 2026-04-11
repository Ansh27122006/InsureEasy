import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KeyTermsGlossary({ keyTerms = [] }) {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [openTerm, setOpenTerm] = useState(null);

  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const filtered = keyTerms.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase());
    const matchLetter = activeLetter === "All" || t.term.toUpperCase().startsWith(activeLetter);
    return matchSearch && matchLetter;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📖</span>
        <div>
          <h2 className="text-xl font-bold">Insurance Terms Simplified</h2>
          <p className="text-gray-500 text-sm">Click any term to see what it really means</p>
        </div>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search terms..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex flex-wrap gap-1">
        {letters.map((l) => (
          <button key={l} onClick={() => setActiveLetter(l)}
            className={`px-2 py-0.5 text-xs rounded border font-medium transition ${activeLetter === l ? "bg-blue-500 text-white border-blue-500" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"}`}>
            {l}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p className="text-4xl mb-2">🔍</p>
          <p>No terms found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((t, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenTerm(openTerm === i ? null : i)}
                className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-50 transition text-left"
              >
                <span className="font-bold text-gray-800">{t.term}</span>
                <span className={`text-gray-400 transition-transform duration-300 ${openTerm === i ? "rotate-180" : ""}`}>▼</span>
              </button>
              <AnimatePresence>
                {openTerm === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 bg-gray-50 text-sm text-gray-600 space-y-2">
                      <p>{t.definition}</p>
                      <button onClick={() => setOpenTerm(null)}
                        className="text-xs text-blue-500 hover:underline">Got it!</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}