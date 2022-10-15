const express = require("express");
const router = express.Router();
const { getBronxPHHData } = require("../controllers/bronxPHHController")

//@desc     Bronx PHH data request
router.get("/phh/:address", getBronxPHHData);

module.exports = router;