"use strict";

const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
    strDrink: {
        type: String,
        unique: true,
        trim: true,
    },
    strDrinkThumb: String,
});

const favModel = mongoose.model("data", favSchema);

module.exports = favModel;