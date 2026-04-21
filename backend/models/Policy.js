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
  // Out-of-Pocket Cost Transparency fields
  costStructure: {
    deductible: {
      individual: { type: Number, default: 0 },
      family: { type: Number, default: 0 },
      description: String,
    },
    copay: [
      {
        service: String,
        amount: Number,
        currency: { type: String, default: "USD" },
      },
    ],
    coinsurance: {
      percentage: { type: Number, default: 0 },
      afterDeductible: { type: Boolean, default: true },
      description: String,
    },
    outOfPocketMax: {
      individual: { type: Number, default: 0 },
      family: { type: Number, default: 0 },
      description: String,
    },
    coverageLimits: [
      {
        service: String,
        maxAmount: Number,
        currency: { type: String, default: "USD" },
        timeFrame: String,
      },
    ],
    notes: String,
  },
});

module.exports = mongoose.model("Policy", PolicySchema);
