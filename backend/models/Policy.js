const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
  filename: { type: String },
  originalText: { type: String },
  uploadedAt: { type: Date, default: Date.now },
  summary: { type: String },
  riskScore: { type: Number },
  covered: [{ title: String, description: String, icon: String }],
  notCovered: [{ title: String, description: String, icon: String }],
  partialCoverage: [{ title: String, description: String }],
  keyTerms: [{ term: String, definition: String }],
  chatHistory: [{ role: String, content: String, timestamp: Date }],
});

module.exports = mongoose.model("Policy", PolicySchema);
