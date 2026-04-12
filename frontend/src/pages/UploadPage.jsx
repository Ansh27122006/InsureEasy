import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

/* ─── Brand tokens ──────────────────────────────────────────── */
const RED = "#E94560";
const NAVY = "#1A1A2E";

/* ─── Inline SVG icons ──────────────────────────────────────── */
const UploadCloudIcon = ({ className = "w-12 h-12" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <polyline points="16 16 12 12 8 16" />
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="21"
    />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
);
const FileTextIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line
      x1="16"
      y1="13"
      x2="8"
      y2="13"
    />
    <line
      x1="16"
      y1="17"
      x2="8"
      y2="17"
    />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const XIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
    />
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
    />
  </svg>
);
const SpinnerIcon = () => (
  <svg
    className="w-5 h-5 animate-spin"
    viewBox="0 0 24 24"
    fill="none">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth={3}
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
    />
  </svg>
);
const PDFIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <text
      x="6"
      y="18"
      fontSize="5"
      fontWeight="bold"
      fill="currentColor"
      stroke="none">
      PDF
    </text>
  </svg>
);

/* ─── Helpers ───────────────────────────────────────────────── */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const TABS = [
  { id: "pdf", label: "PDF Upload", Icon: UploadCloudIcon },
  { id: "text", label: "Text Input", Icon: FileTextIcon },
];

/* ─── Main Component ────────────────────────────────────────── */
export default function UploadPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pdf");
  const [file, setFile] = useState(null);
  const [policyText, setPolicyText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ── Dropzone ── */
  const onDrop = useCallback((accepted, rejected) => {
    setError("");
    if (rejected.length > 0) {
      setError("Only PDF files are accepted. Please try again.");
      return;
    }
    if (accepted.length > 0) setFile(accepted[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "application/pdf": [".pdf"] },
      maxFiles: 1,
      multiple: false,
    });

  /* ── Ready state ── */
  const isReady = activeTab === "pdf" ? !!file : policyText.trim().length > 20;

  /* ── Analyze ── */
  async function handleAnalyze() {
    if (!isReady || loading) return;
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      if (activeTab === "pdf") {
        formData.append("file", file);
      } else {
        formData.append("text", policyText.trim());
      }
      const data = await api.analyzePolicy(formData);
      navigate("/results", {
        state: {
          data,
          fileName: activeTab === "pdf" ? file.name : "Pasted Policy",
        },
      });
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  /* ── Dropzone border colour ── */
  const dropzoneBorder = isDragReject
    ? "border-red-400 bg-red-50"
    : isDragActive
    ? "border-blue-500 bg-blue-50 scale-[1.01]"
    : file
    ? "border-green-400 bg-green-50"
    : "border-blue-400 bg-white hover:bg-blue-50/50 hover:border-blue-500";

  return (
    <>
      {/* Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:wght@700;900&display=swap');
        .upload-heading { font-family: 'Fraunces', serif; }
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        style={{
          background:
            "linear-gradient(160deg, #F0F4FF 0%, #FAF5FF 50%, #FFF0F3 100%)",
        }}>
        {/* Ambient blobs */}
        <div
          className="fixed top-0 left-0 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-30"
          style={{ background: "#BFDBFE" }}
        />
        <div
          className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-25"
          style={{ background: "#FCA5A5" }}
        />

        <div className="relative z-10 w-full max-w-2xl">
          {/* ── Header ── */}
          <div className="text-center mb-9">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: "rgba(233,69,96,0.08)",
                color: RED,
                border: `1px solid rgba(233,69,96,0.2)`,
              }}>
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: RED }}
              />
              AI-Powered Analysis
            </div>
            <h1 className="upload-heading text-4xl font-black text-gray-900 leading-tight">
              Upload Your{" "}
              <span className="relative">
                Insurance Policy
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none">
                  <path
                    d="M2 6 Q75 2 150 5 Q225 8 298 4"
                    stroke={RED}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 mt-4 text-base max-w-md mx-auto leading-relaxed">
              Get plain-English summaries, coverage maps, and instant answers —
              in under 60 seconds.
            </p>
          </div>

          {/* ── Card ── */}
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            style={{
              boxShadow:
                "0 8px 48px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.05)",
            }}>
            {/* ── Tabs ── */}
            <div className="flex border-b border-gray-100">
              {TABS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setError("");
                  }}
                  className={[
                    "flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-semibold transition-all duration-200",
                    activeTab === id
                      ? "text-gray-900 border-b-2"
                      : "text-gray-400 hover:text-gray-600",
                  ].join(" ")}
                  style={activeTab === id ? { borderColor: RED } : {}}>
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <div className="p-8 flex flex-col gap-6">
              {/* ═══════════════ PDF TAB ═══════════════ */}
              {activeTab === "pdf" && (
                <>
                  {!file ? (
                    /* Dropzone */
                    <div
                      {...getRootProps()}
                      className={[
                        "relative border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 select-none",
                        dropzoneBorder,
                      ].join(" ")}>
                      <input {...getInputProps()} />
                      <div className="flex flex-col items-center justify-center py-14 px-6 text-center gap-4">
                        <div
                          className={[
                            "w-20 h-20 rounded-2xl flex items-center justify-center transition-colors duration-200",
                            isDragActive
                              ? "bg-blue-100 text-blue-500"
                              : "bg-gray-100 text-gray-400",
                          ].join(" ")}>
                          <UploadCloudIcon className="w-10 h-10" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold text-base">
                            {isDragActive
                              ? "Drop your PDF here…"
                              : "Drag & drop your PDF here"}
                          </p>
                          <p className="text-gray-400 text-sm mt-1.5">
                            or{" "}
                            <span
                              className="font-semibold underline underline-offset-2 cursor-pointer"
                              style={{ color: "#3B82F6" }}>
                              browse files
                            </span>{" "}
                            from your device
                          </p>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">
                            PDF only
                          </span>
                          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">
                            Up to 50 MB
                          </span>
                          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">
                            Encrypted
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* File success state */
                    <div className="border-2 border-green-300 bg-green-50 rounded-2xl p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 text-green-600">
                          <PDFIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 truncate text-sm">
                            {file.name}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">
                            {formatBytes(file.size)}
                          </p>
                          <div className="flex items-center gap-1.5 mt-1.5 text-green-600">
                            <CheckCircleIcon className="w-4 h-4" />
                            <span className="text-xs font-semibold">
                              Ready to analyze
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                            setError("");
                          }}
                          className="w-8 h-8 rounded-full bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center shadow-sm border border-gray-200 transition-colors duration-150 shrink-0"
                          title="Remove file">
                          <XIcon />
                        </button>
                      </div>
                      {/* Replace link */}
                      <button
                        onClick={() => setFile(null)}
                        className="mt-3 w-full text-xs text-center text-gray-400 hover:text-blue-500 transition-colors duration-150 py-1">
                        Replace with a different file
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* ═══════════════ TEXT TAB ═══════════════ */}
              {activeTab === "text" && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4 text-gray-400" />
                    Or paste your policy text here
                  </label>
                  <textarea
                    value={policyText}
                    onChange={(e) => setPolicyText(e.target.value)}
                    placeholder="Paste the full text of your insurance policy document…"
                    rows={12}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 resize-none outline-none focus:ring-2 transition-all duration-200 leading-relaxed"
                    style={{ focusRingColor: RED }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = `0 0 0 3px rgba(233,69,96,0.12)`)
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                  <div className="flex justify-between items-center text-xs text-gray-400 px-1">
                    <span>
                      {policyText.length > 0
                        ? `${policyText.length.toLocaleString()} characters`
                        : "Minimum 20 characters"}
                    </span>
                    {policyText.trim().length > 20 && (
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <CheckCircleIcon className="w-3.5 h-3.5" /> Ready
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* ── Error message ── */}
              {error && (
                <div className="flex items-start gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                  <span className="font-bold mt-0.5">⚠</span>
                  <span>{error}</span>
                </div>
              )}

              {/* ── Divider ── */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                  Ready to go
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* ── Analyze Button ── */}
              <button
                onClick={handleAnalyze}
                disabled={!isReady || loading}
                className={[
                  "w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-3 transition-all duration-200",
                  isReady && !loading
                    ? "hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    : "opacity-40 cursor-not-allowed",
                ].join(" ")}
                style={{
                  background:
                    isReady && !loading
                      ? `linear-gradient(135deg, ${RED} 0%, #c0304f 100%)`
                      : "#9CA3AF",
                  boxShadow:
                    isReady && !loading
                      ? `0 8px 24px rgba(233,69,96,0.35)`
                      : "none",
                }}>
                {loading ? (
                  <>
                    <SpinnerIcon />
                    Analyzing your policy…
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5">
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                      />
                      <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                      />
                    </svg>
                    Analyze Policy
                  </>
                )}
              </button>

              {/* ── Trust note ── */}
              <p className="text-center text-xs text-gray-400 leading-relaxed">
                🔒 Your document is encrypted in transit and never stored
                permanently.{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-gray-600 transition-colors">
                  Privacy policy
                </a>
              </p>
            </div>
          </div>

          {/* ── Bottom badges ── */}
          <div className="flex items-center justify-center gap-6 mt-7">
            {["SOC 2 Compliant", "256-bit Encryption", "HIPAA Ready"].map(
              (badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(233,69,96,0.12)",
                      color: RED,
                      fontSize: 9,
                    }}>
                    ✓
                  </span>
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
}
