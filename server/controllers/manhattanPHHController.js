const asyncHandler = require("express-async-handler");

const manhattanPHHData = require("../models/manhattanPHHModel")

//@desc     Returns PHH data for addresses in Manhattan
const getManhattanPHHData = asyncHandler( async (req, res) => {
    const reqAddress = req.params.address;
    console.log("started ["+ reqAddress+ "]");

    const buildingInfo = await manhattanPHHData.find({"Incident Address": reqAddress});
    console.log("["+ reqAddress+ "] after await");

    res.status(200).json(buildingInfo);
});

module.exports = {
    getManhattanPHHData,
}