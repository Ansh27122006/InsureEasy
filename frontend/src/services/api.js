import axios from "axios";

/* ─── Axios instance ────────────────────────────────────────── */
const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 60_000, // 60s — generous for AI analysis calls
  headers: {
    Accept: "application/json",
  },
});

/* ─── Request interceptor ───────────────────────────────────── */
// Attach auth token if present and log outbound requests in dev
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (import.meta.env?.DEV) {
      console.debug(
        `[API] ${config.method?.toUpperCase()} ${config.url}`,
        config.data ?? ""
      );
    }

    return config;
  },
  (error) => {
    console.error("[API] Request setup error:", error);
    return Promise.reject(error);
  }
);

/* ─── Response interceptor ──────────────────────────────────── */
// Normalise errors into a consistent shape before they propagate
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server replied with a non-2xx status
      const { status, data, config } = error.response;
      console.error(
        `[API] ${status} error on ${config?.method?.toUpperCase()} ${
          config?.url
        }:`,
        data
      );

      const message =
        data?.message || data?.error || `Request failed with status ${status}`;

      const normalised = new Error(message);
      normalised.status = status;
      normalised.data = data;
      return Promise.reject(normalised);
    }

    if (error.request) {
      // Request was sent but no response received (network/timeout)
      console.error("[API] No response received:", error.request);
      const networkError = new Error(
        "Unable to reach the server. Please check your connection."
      );
      networkError.isNetworkError = true;
      return Promise.reject(networkError);
    }

    // Something else went wrong setting up the request
    console.error("[API] Unexpected error:", error.message);
    return Promise.reject(error);
  }
);

/* ─── 1. analyzePolicy ──────────────────────────────────────── */
/**
 * Sends a PDF file or raw policy text to the analysis endpoint.
 *
 * @param {FormData} formData — Must contain either a "file" (PDF Blob) or
 *                              a "text" (string) field.
 * @returns {{ summary: string, covered: string[], notCovered: string[],
 *             keyTerms: Record<string, string>, riskScore: number }}
 */
export async function analyzePolicy(formData) {
  const response = await client.post("/policy/analyze", formData);
  return response.data;
}

/* ─── 2. simulateScenario ───────────────────────────────────── */
/**
 * Asks a "what if" question against a previously analysed policy.
 *
 * @param {string} policyId — ID returned by analyzePolicy
 * @param {string} question — Natural-language scenario question
 * @returns {{ answer: string, relevantClauses: string[] }}
 */
export async function simulateScenario(policyId, question) {
  const response = await client.post("/policy/simulate", {
    policyId,
    question,
  });
  return response.data;
}

/* ─── 3. chatWithPolicy ─────────────────────────────────────── */
/**
 * Sends a full conversation history for a multi-turn policy chat.
 *
 * @param {string} policyId — ID of the policy context to use
 * @param {{ role: "user" | "assistant", content: string }[]} messages
 * @returns {{ reply: string }}
 */
export async function chatWithPolicy(policyId, messages) {
  const response = await client.post("/policy/chat", {
    policyId,
    messages,
  });
  return response.data;
}

/* ─── Default export (convenience for mocking in tests) ─────── */
export default { analyzePolicy, simulateScenario, chatWithPolicy };
