const express = require("express");
const router = express.Router();
const matchingControllers = require("../controllers/matching.controllers");

// matching route
router.post("/match-users", matchingControllers.getMatchedUsers);

module.exports = router;
