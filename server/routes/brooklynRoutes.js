const express = require("express");
const router = express.Router();
const { getBrooklynPHHData } = require("../controllers/brooklynPHHController")

//@desc     Brooklyn PHH data request
router.get("/phh/:address", getBrooklynPHHData);

module.exports = router;