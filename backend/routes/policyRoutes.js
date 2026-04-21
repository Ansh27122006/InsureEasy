const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { analyzePolicy } = require("../controllers/analyzeController");
const { simulateScenario } = require("../controllers/simulateController");
const { chatWithPolicy } = require("../controllers/chatController");
const { calculateOOPCost } = require("../controllers/oopCalculatorController");
const Policy = require("../models/Policy");

router.post("/analyze", upload, analyzePolicy);
router.post("/simulate", simulateScenario);
router.post("/chat", chatWithPolicy);
router.post("/calculate-oop", calculateOOPCost);

router.get("/:id", async (req, res) => {
  const policy = await Policy.findById(req.params.id);
  if (!policy)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, policy });
});

module.exports = router;
