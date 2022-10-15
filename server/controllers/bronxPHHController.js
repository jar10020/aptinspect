const asyncHandler = require("express-async-handler");

const bronxPHHData = require("../models/bronxPHHModel")

//@desc     Returns PHH data for addresses in Bronx
const getBronxPHHData = asyncHandler( async (req, res) => {
    const reqAddress = req.params.address;

    ///console.log("["+ reqAddress+ "]");

    const buildingInfo = await bronxPHHData.find({"Incident Address": reqAddress});

    res.status(200).json(buildingInfo);
});

module.exports = {
    getBronxPHHData,
}