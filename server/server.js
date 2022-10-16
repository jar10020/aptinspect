const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//use express body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/buildings", require("./routes/buildingRoutes"));

app.use("/api/manhattan", require("./routes/manhattanRoutes"));
app.use("/api/brooklyn", require("./routes/brooklynRoutes"));
app.use("/api/queens", require("./routes/queensRoutes"));
app.use("/api/bronx", require("./routes/bronxRoutes"));


const path = require("path");
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(port, () => console.log(`Server started on port ${port}`));