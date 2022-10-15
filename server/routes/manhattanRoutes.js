const express = require("express");
const router = express.Router();
const { getManhattanPHHData } = require("../controllers/manhattanPHHController")

//@desc     Manhattan PHH data request
router.get("/phh/:address", getManhattanPHHData);

module.exports = router;