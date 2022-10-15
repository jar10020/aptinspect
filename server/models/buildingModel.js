const mongoose = require("mongoose");

const buildingSchema = mongoose.Schema(
    {
        address: String,
        borough: Number
    },
    {
        timestamps: true,
    }
);



module.exports = mongoose.model("Building", buildingSchema);