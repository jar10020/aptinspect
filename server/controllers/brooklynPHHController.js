const asyncHandler = require("express-async-handler");

const brooklynPHHData = require("../models/brooklynPHHModel")

//@desc     Returns PHH data for addresses in Brooklyn
const getBrooklynPHHData = asyncHandler( async (req, res) => {
    const reqAddress = req.params.address;

    ///console.log("["+ reqAddress+ "]");

    const buildingInfo = await brooklynPHHData.find({"Incident Address": reqAddress});

    res.status(200).json(buildingInfo);
});

module.exports = {
    getBrooklynPHHData,
}