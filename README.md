<div align="center">

<img src="https://img.shields.io/badge/-%F0%9F%9B%A1%EF%B8%8F%20InsureEasy-1A1A2E?style=for-the-badge&logoColor=white" height="60" />

### AI-Powered Insurance Policy Analyzer

**Upload any insurance policy. Get plain-English summaries, coverage maps, risk scores, and instant answers — in under 60 seconds.**

<br />

[![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=1A1A2E)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white&labelColor=1A1A2E)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white&labelColor=1A1A2E)](https://mongodb.com)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini_2.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white&labelColor=1A1A2E)](https://deepmind.google/technologies/gemini)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=1A1A2E)](https://tailwindcss.com)

<br />

> 🎬 **[Watch Demo Video →](https://youtu.be/pnA3kKXjdhM)**
<br />

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Language Support](#-language-support)
- [Team](#-team)

---

## 😰 The Problem

Insurance policies are written for lawyers, not customers.

| Stat | Reality |
|------|---------|
| 📄 **47 pages** | Average insurance policy length |
| ❌ **68%** | Claims denied due to unknown exclusions |
| 😶 **9 in 10** | People who don't fully read their policy |
| 💸 **₹0 refund** | What you get back when a claim is rejected |

People pay premiums for years and discover their coverage gaps only when they file a claim — and it's too late.

---

## ✅ The Solution

**InsureEasy** uses Google Gemini AI to instantly transform any insurance policy PDF into:

- A plain-English 2–3 sentence summary
- Visual coverage and exclusion cards
- A 0–100 risk score
- An interactive glossary of key terms
- A claim simulator with real YES / NO / PARTIAL verdicts
- A multi-turn AI chat that knows your exact policy

**Result:** Complete policy clarity in under 60 seconds. No account. No credit card. No confusion.

---

## ✨ Features

### 🛡️ Core Analysis
| Feature | Description |
|---------|-------------|
| **PDF & Text Upload** | Drag-and-drop PDF or paste raw policy text |
| **Plain-English Summary** | 2–3 sentence AI-generated overview |
| **Coverage Visualizer** | Visual cards for everything your policy covers |
| **Exclusion Highlighter** | Every exclusion flagged with searchable cards |
| **Risk Score Gauge** | Animated 0–100 risk meter with Low / Medium / High rating |
| **Key Terms Glossary** | Every insurance term defined in one sentence |

### ⚡ Interactive Tools
| Feature | Description |
|---------|-------------|
| **Claim Simulator** | Categorized scenarios (Health, Auto, Property, Travel, Liability) with structured verdict cards, coverage likelihood meter, and relevant clause references |
| **AI Policy Chat** | Multi-turn conversational chat grounded in your specific policy |
| **Policy Comparison** | Side-by-side analysis of two policies with a winner recommendation |

### 🌐 Accessibility
| Feature | Description |
|---------|-------------|
| **Hindi Language Mode** | Full UI and AI responses in हिन्दी — toggle in the navbar |
| **Shareable Results** | Every analysis saved to MongoDB with a unique ID |

---

## 🛠️ Tech Stack

### Frontend
```
React 18 + Vite          — UI framework and build tool
React Router v6          — Client-side routing
Tailwind CSS             — Utility-first styling
Framer Motion            — Page transitions and animations
React Dropzone           — Drag-and-drop PDF upload
React Hot Toast          — Toast notifications
Axios                    — HTTP client with interceptors
```

### Backend
```
Node.js + Express        — REST API server
MongoDB + Mongoose       — Policy storage and chat history
Multer (memory storage)  — PDF buffer handling
express-async-errors     — Global async error handling
```

### AI
```
Google Gemini 2.5 Flash  — Policy analysis, chat, and simulation
Multi-key rotation       — Up to 10 API keys with automatic fallback
JSON repair              — Auto-repairs truncated Gemini responses
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB URI (Atlas free tier works)
- Google Gemini API key ([get one free](https://aistudio.google.com/app/apikey))

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/insure-easy.git
cd insure-easy
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY_1=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
GEMINI_API_BASE_URL=https://generativelanguage.googleapis.com/v1
```

> 💡 Add up to 10 keys as `GEMINI_API_KEY_1`, `GEMINI_API_KEY_2`, etc. for automatic rate-limit fallback.

Start the backend:
```bash
npm run dev
# Server running on http://localhost:5000
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=InsureEasy
```

Start the frontend:
```bash
npm run dev
# App running on http://localhost:5173
```

### 4. Open in browser

```
http://localhost:5173
```

Upload any insurance policy PDF and see it analyzed in under 60 seconds.

---

## 📁 Project Structure

```
insure-easy/
├── backend/
│   ├── controllers/
│   │   ├── analyzeController.js     # PDF/text → Gemini → structured JSON
│   │   ├── chatController.js        # Multi-turn policy chat
│   │   └── simulateController.js    # What-if scenario simulation
│   ├── middleware/
│   │   ├── errorHandler.js          # Global error handler
│   │   └── upload.js                # Multer memory storage
│   ├── models/
│   │   └── Policy.js                # MongoDB schema
│   ├── routes/
│   │   └── policyRoutes.js          # /analyze /chat /simulate /:id
│   ├── utils/
│   │   └── geminiClient.js          # Multi-key Gemini client
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── CoverageCard.jsx
    │   │   ├── CoverageGrid.jsx
    │   │   ├── ExclusionHighlighter.jsx
    │   │   ├── ExclusionBadge.jsx
    │   │   ├── KeyTermsGlossary.jsx
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── PolicyChat.jsx
    │   │   ├── PolicyComparison.jsx
    │   │   ├── ScenarioSimulator.jsx
    │   │   └── UploadZone.jsx
    │   ├── context/
    │   │   └── LanguageContext.jsx  # EN / हि global toggle
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── UploadPage.jsx
    │   │   ├── ResultPage.jsx
    │   │   ├── ComparePage.jsx
    │   │   ├── HowItWorks.jsx
    │   │   └── About.jsx
    │   ├── services/
    │   │   └── api.js               # Axios client + API functions
    │   └── App.jsx
    └── ...
```

---

## 📡 API Reference

All endpoints are prefixed with `/api/policy`.

### `POST /analyze`
Analyze a policy from PDF or text.

```
Content-Type: multipart/form-data

Body:
  file      File      PDF file (optional if text provided)
  text      string    Raw policy text (optional if file provided)
  language  string    "en" | "hi"  (default: "en")

Response:
  {
    success: true,
    policyId: "...",
    summary: "...",
    riskScore: 65,
    covered: [{ title, description, icon }],
    notCovered: [{ title, description, icon }],
    partialCoverage: [{ title, description }],
    keyTerms: [{ term, definition }]
  }
```

### `POST /simulate`
Simulate a what-if scenario against a policy.

```
Content-Type: application/json

Body:
  { policyId, question, language }

Response:
  { success, answer, covered, relevantClauses, recommendation }
```

### `POST /chat`
Multi-turn AI chat about a policy.

```
Content-Type: application/json

Body:
  { policyId, messages: [{ role, content }], language }

Response:
  { success, reply }
```

### `GET /:id`
Fetch a previously analyzed policy by ID.

```
Response:
  { success, policy: { ...PolicySchema } }
```

---

## 🌐 Language Support

InsureEasy supports **English** and **Hindi (हिन्दी)** — toggle from the navbar.

When Hindi is selected:
- All AI-generated content (summaries, descriptions, definitions, chat replies, simulation answers) is returned in Devanagari script
- The full app UI also switches to Hindi labels and interface text
- JSON structure stays in English so parsing is never affected
- Switching mid-session works instantly — no page reload needed

This makes InsureEasy accessible to millions of Hindi-speaking insurance customers across India who have never been able to understand their own policies.

---

## 👥 Team

Built with ❤️ for **[Finvasia Innovation Hackathon]** — [2026]

| Name | Department |
|------|------|
| Ansh Preet Kaur| CSE |
| Akshra Saluja | CSE |
| Amanjot Kaur | CSE |
| Angelpreet Kaur | CSE |

---

<div align="center">

**[🛡️ Try InsureEasy Live →](https://insure-simple.vercel.app/)**

*Stop guessing. Start knowing.*

<br />

Made with ❤️ at [Finvasia Innovation Hackathon] · [2026]

</div>
