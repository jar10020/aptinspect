const asyncHandler = require("express-async-handler");

const Building = require("../models/buildingModel");
const manhattanPHHData = require("../models/manhattanPHHModel")

//@desc     Return building info ig. Not sure if we want to do it in one big bundle or split
//          up the calls by category, will let it marinate I suppose.
const getBuildings = asyncHandler( async (req, res) => {
    const buildingInfo = await manhattanPHHData.find({"Incident Address": "332 WEST 49 STREET"});

    res.status(200).json(buildingInfo);
});


module.exports = {
    getBuildings,
    
}