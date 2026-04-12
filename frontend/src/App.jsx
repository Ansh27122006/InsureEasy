import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";

/* ── Scroll to top on route change ──────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ── Page transition wrapper ────────────────────────────────── */
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit">
        <Routes location={location}>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/upload"
            element={<UploadPage />}
          />
          <Route
            path="/results"
            element={<ResultPage />}
          />
          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1A1A2E",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            borderRadius: "12px",
            border: "1px solid rgba(233,69,96,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          },
          success: {
            iconTheme: { primary: "#4ADE80", secondary: "#1A1A2E" },
          },
          error: {
            iconTheme: { primary: "#E94560", secondary: "#1A1A2E" },
          },
        }}
      />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
