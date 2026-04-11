import { useEffect, useRef } from "react";

export function RiskScoreMeter({ score }) {
  const circleRef = useRef(null);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const getColor = (s) => s <= 40 ? "#10B981" : s <= 70 ? "#F59E0B" : "#EF4444";
  const getLabel = (s) => s <= 40 ? "Low Risk" : s <= 70 ? "Medium Risk" : "High Risk";
  const getDesc = (s) =>
    s <= 40 ? "This policy provides solid coverage"
    : s <= 70 ? "Some gaps in coverage — review exclusions"
    : "Many exclusions — consider a better policy";

  useEffect(() => {
    let start = null;
    const duration = 1500;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = progress * score;
      const offset = circumference - (current / 100) * circumference;
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = offset;
      }
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [score, circumference]);

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center p-6">
      <svg width="180" height="180" className="-rotate-90">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="12" />
        <circle
          ref={circleRef}
          cx="90" cy="90" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <div className="mt-[-100px] flex flex-col items-center">
        <span className="text-4xl font-bold" style={{ color }}>{score}</span>
      </div>
      <p className="mt-16 text-lg font-semibold" style={{ color }}>{getLabel(score)}</p>
      <p className="text-sm text-gray-500 text-center mt-1">{getDesc(score)}</p>
    </div>
  );
}

export function RiskScoreBar({ score }) {
  const getColor = (s) => s <= 40 ? "bg-green-500" : s <= 70 ? "bg-yellow-500" : "bg-red-500";
  const getLabel = (s) => s <= 40 ? "Low Risk" : s <= 70 ? "Medium Risk" : "High Risk";

  return (
    <div className="w-full p-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Risk Score</span>
        <span className="text-sm font-bold">{score}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full transition-all duration-1000 ${getColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="mt-1 text-sm text-gray-500">{getLabel(score)}</p>
    </div>
  );
}