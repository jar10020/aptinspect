const asyncHandler = require("express-async-handler");

const queensPHHData = require("../models/queensPHHModel")

//@desc     Returns PHH data for addresses in Queens
const getQueensPHHData = asyncHandler( async (req, res) => {
    const reqAddress = req.params.address;

    ///console.log("["+ reqAddress+ "]");

    const buildingInfo = await queensPHHData.find({"Incident Address": reqAddress});

    res.status(200).json(buildingInfo);
});

module.exports = {
    getQueensPHHData,
}