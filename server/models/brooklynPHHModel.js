const mongoose = require("mongoose");

//PHH Schema brooklyn
const brooklynPHHSchema = mongoose.Schema(
    {
        "Unique Key": Number,
        "Created Date": String,
        "Closed Date": String,
        "Agency": String,
        "Agency Name": String,
        "Complaint Type": String,
        "Descriptor": String,
        "Location Type": String,
        "Incident Zip": Number,
        "Incident Address": String,
        "Street Name": String,
        "Cross Street 1": String,
        "Cross Street 2": String,
        "Intersection Street 1": String,
        "Intersection Street 2": String,
        "Address Type": String,
        "City": String,
        "Landmark": String,
        "Facility Type": String,
        "Status": String,
        "Due Date": String,
        "Resolution Description": String,
        "Community Board": String,
        "BBL": Number,
        "Borough": String,
        "X Coordinate (State Plane)": Number,
        "Y Coordinate (State Plane)": Number,
        "Open Data Channel Type": String,
        "Park Facility Name": String,
        "Park Borough": String,
        "Vehicle Type": String,
        "Taxi Company Borough": String,
        "Taxi Pick Up Location": String,
        "Bridge Highway Name": String,
        "Bridge Highway Direction": String,
        "Road Ramp": String,
        "Bridge Highway Segment": String,
        "Latitude": mongoose.Decimal128,
        "Longitude": mongoose.Decimal128,
        "Location": String
    },
    {
        collection: "Reports-Brooklyn-PHH",
    }
);

module.exports = mongoose.model("brooklynPHHData", brooklynPHHSchema);