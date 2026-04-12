import { useState } from "react";
import { analyzePolicy } from "../services/api";
import toast from "react-hot-toast";

export default function PolicyComparison() {
  const [policy1, setPolicy1] = useState(null);
  const [policy2, setPolicy2] = useState(null);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const analyze = async (text, setData, setLoading, label) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);
      const data = await analyzePolicy(formData);
      setData(data);
    } catch {
      toast.error(`Failed to analyze ${label}`);
    } finally {
      setLoading(false);
    }
  };

  const winner = () => {
    if (!policy1 || !policy2) return null;
    const score1 =
      policy1.riskScore +
      (policy1.notCovered?.length ?? 0) -
      (policy1.covered?.length ?? 0);
    const score2 =
      policy2.riskScore +
      (policy2.notCovered?.length ?? 0) -
      (policy2.covered?.length ?? 0);
    return score1 <= score2 ? "A" : "B";
  };

  const w = winner();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">📊 Compare Two Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            label: "A",
            text: text1,
            setText: setText1,
            data: policy1,
            setData: setPolicy1,
            loading: loading1,
            setLoading: setLoading1,
          },
          {
            label: "B",
            text: text2,
            setText: setText2,
            data: policy2,
            setData: setPolicy2,
            loading: loading2,
            setLoading: setLoading2,
          },
        ].map((p) => (
          <div
            key={p.label}
            className="border rounded-xl p-4 space-y-2">
            <h3 className="font-semibold">Policy {p.label}</h3>
            <textarea
              rows={4}
              value={p.text}
              onChange={(e) => p.setText(e.target.value)}
              placeholder={`Paste Policy ${p.label} text here...`}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={() =>
                analyze(p.text, p.setData, p.setLoading, `Policy ${p.label}`)
              }
              disabled={p.loading || !p.text.trim()}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white py-2 rounded-lg text-sm font-semibold transition">
              {p.loading ? "Analyzing..." : `Analyze Policy ${p.label}`}
            </button>
            {p.data && (
              <p className="text-green-600 text-sm font-medium">
                ✅ Analysis ready
              </p>
            )}
          </div>
        ))}
      </div>

      {policy1 && policy2 && (
        <div className="space-y-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Feature</th>
                <th className="border px-4 py-2 text-center">Policy A</th>
                <th className="border px-4 py-2 text-center">Policy B</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Risk Score", policy1.riskScore, policy2.riskScore],
                [
                  "Covered Items",
                  policy1.covered?.length,
                  policy2.covered?.length,
                ],
                [
                  "Exclusions",
                  policy1.notCovered?.length,
                  policy2.notCovered?.length,
                ],
              ].map(([label, v1, v2]) => (
                <tr key={label}>
                  <td className="border px-4 py-2 font-medium">{label}</td>
                  <td className="border px-4 py-2 text-center">{v1 ?? "—"}</td>
                  <td className="border px-4 py-2 text-center">{v2 ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className={`rounded-xl p-4 text-center font-bold text-lg ${
              w === "A"
                ? "bg-green-100 text-green-700"
                : "bg-green-100 text-green-700"
            }`}>
            🏆 Policy {w} is Better!
          </div>
        </div>
      )}
    </div>
  );
}
