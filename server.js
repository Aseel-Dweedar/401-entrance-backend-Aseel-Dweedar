////////////// required //////////////
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
////////////// required controllers  //////////////
const apiData = require("./controllers/api.controller");
const { createFav, getFav, deleteFav, updateFav } = require("./controllers/crud.controller");
////////////// setup server //////////////
const app = express();
const PORT = process.env.PORT;
////////////// connect to mongoose //////////////
mongoose.connect("mongodb://localhost:27017/fav", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
////////////// setup middleware //////////////
app.use(cors());
app.use(express.json());
////////////// Proof of life //////////////
app.get("/", (req, res) => {
    res.send("it is alive");
});
////////////// apl data //////////////
app.get("/drink", apiData);
////////////// crud data //////////////
app.post("/drink/fav", createFav);
app.get("/drink/fav", getFav);
app.delete("/drink/fav/:id", deleteFav);
app.put("/drink/fav/:id", updateFav);
////////////// my PORT //////////////
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});