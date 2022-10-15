const express = require("express");
const router = express.Router();
const { getBuildings, postBuildings } = require("../controllers/buildingsController")

//@desc     Get general building info i suppose
//@route    GET api/buildings
router.get("/", getBuildings);


module.exports = router;