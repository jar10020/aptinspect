const express = require("express");
const router = express.Router();
const { getQueensPHHData } = require("../controllers/queensPHHController")

//@desc     Queens PHH data request
router.get("/phh/:address", getQueensPHHData);

module.exports = router;