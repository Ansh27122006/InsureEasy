/* ─────────────────────────────────────────────────────────────
   UploadZone.jsx — reusable drag-and-drop PDF upload zone
   Props:
     onFileAccepted  {(file: File) => void}   — called on valid drop/pick
     onFileRejected  {(msg: string) => void}  — called on invalid file
     maxSizeMB       {number}                 — default 50
     disabled        {boolean}                — locks the zone
   ───────────────────────────────────────────────────────────── */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const RED  = "#E94560";
const BLUE = "#3B82F6";

/* ── Helpers ────────────────────────────────────────────────── */
function formatBytes(bytes) {
  if (bytes < 1024)        return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/* ── Icons ──────────────────────────────────────────────────── */
const UploadCloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
    strokeLinecap="round" className="w-4 h-4">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const PDFFileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

/* ── Main Component ─────────────────────────────────────────── */
export function UploadZone({
  onFileAccepted,
  onFileRejected,
  file         = null,
  onClearFile,
  maxSizeMB    = 50,
  disabled     = false,
}) {
  const maxSize = maxSizeMB * 1024 * 1024;

  const onDrop = useCallback(
    (accepted, rejected) => {
      if (rejected.length > 0) {
        const err = rejected[0]?.errors?.[0];
        const msg = err?.code === "file-too-large"
          ? `File exceeds ${maxSizeMB} MB limit.`
          : err?.code === "file-invalid-type"
          ? "Only PDF files are accepted."
          : "Invalid file. Please try again.";
        onFileRejected?.(msg);
        return;
      }
      if (accepted.length > 0) {
        onFileAccepted?.(accepted[0]);
      }
    },
    [onFileAccepted, onFileRejected, maxSizeMB]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept:   { "application/pdf": [".pdf"] },
    maxFiles: 1,
    multiple: false,
    maxSize,
    disabled,
  });

  /* Border / bg based on state */
  const stateClass = disabled
    ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-60"
    : isDragReject
    ? "border-red-400 bg-red-50"
    : isDragActive
    ? "border-blue-500 bg-blue-50 scale-[1.01]"
    : file
    ? "border-green-400 bg-green-50"
    : "border-blue-400 bg-white hover:bg-blue-50/40 hover:border-blue-500 cursor-pointer";

  /* ── File success view ── */
  if (file) {
    return (
      <div
        className="border-2 border-green-300 bg-green-50 rounded-2xl p-5
                   transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center
                          shadow-sm shrink-0 text-green-600">
            <PDFFileIcon />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-800 truncate text-sm">{file.name}</p>
            <p className="text-gray-500 text-xs mt-0.5">{formatBytes(file.size)}</p>
            <div className="flex items-center gap-1.5 mt-1.5 text-green-600">
              <CheckCircleIcon />
              <span className="text-xs font-semibold">Ready to analyze</span>
            </div>
          </div>

          {!disabled && (
            <button
              onClick={(e) => { e.stopPropagation(); onClearFile?.(); }}
              className="w-8 h-8 rounded-full bg-white hover:bg-red-50 text-gray-400
                         hover:text-red-500 flex items-center justify-center shadow-sm
                         border border-gray-200 transition-colors duration-150 shrink-0"
              title="Remove file"
            >
              <XIcon />
            </button>
          )}
        </div>

        {/* Replace link */}
        {!disabled && (
          <button
            onClick={() => onClearFile?.()}
            className="mt-3 w-full text-xs text-center text-gray-400 hover:text-blue-500
                       transition-colors duration-150 py-1"
          >
            Replace with a different file
          </button>
        )}
      </div>
    );
  }

  /* ── Dropzone idle / drag view ── */
  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-2xl transition-all duration-200 ${stateClass}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center py-14 px-6 text-center gap-4">
        {/* Icon bubble */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center
                      transition-colors duration-200
                      ${isDragActive ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-400"}`}
        >
          <UploadCloudIcon />
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-700 font-semibold text-base">
            {isDragReject
              ? "Only PDF files are accepted"
              : isDragActive
              ? "Drop your PDF here…"
              : "Drag & drop your PDF here"}
          </p>
          <p className="text-gray-400 text-sm mt-1.5">
            or{" "}
            <span
              className="font-semibold underline underline-offset-2 cursor-pointer"
              style={{ color: BLUE }}
            >
              browse files
            </span>{" "}
            from your device
          </p>
        </div>

        {/* Constraint pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">PDF only</span>
          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">
            Up to {maxSizeMB} MB
          </span>
          <span className="px-2.5 py-1 bg-gray-100 rounded-full font-medium">🔒 Encrypted</span>
        </div>
      </div>
    </div>
  );
}

export default UploadZone;