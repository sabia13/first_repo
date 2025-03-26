const express = require("express");
const User = require("../models/User");
const Mentorship = require("../models/Mentorship");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch mentors
router.get("/mentors", authenticate, async (req, res) => {
  try {
    const mentors = await User.findAll({ where: { role: "alumni", availability: true } });
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Match student and mentor
router.post("/match", authenticate, async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const mentorship = await Mentorship.create({ studentId, mentorId });
    res.status(201).json({ message: "Mentorship created successfully!", mentorship });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;