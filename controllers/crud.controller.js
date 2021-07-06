"use strict";

const favSchema = require("../models/crudSchema.model");

// // // // // Create // // // // //
const createFav = (req, res) => {
    const { strDrink, strDrinkThumb } = req.body;
    favSchema.findOne({ strDrink: strDrink }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else if (data) {
            res.send("Already added");
        } else {
            const newData = new favSchema({
                strDrink: strDrink,
                strDrinkThumb: strDrinkThumb,
            });
            newData.save();
            res.send(newData);
        }
    });
};
// // // // // Get // // // // //
const getFav = (req, res) => {
    favSchema.find({}, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send(data);
        }
    });
};
// // // // // Delete // // // // //
const deleteFav = (req, res) => {
    const id = req.params.id;
    favSchema.deleteOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send(data);
        }
    });
};
// // // // // Update // // // // //
const updateFav = (req, res) => {
    const id = req.params.id;
    const { strDrink, strDrinkThumb } = req.body;
    favSchema.findOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            data.strDrink = strDrink;
            data.strDrinkThumb = strDrinkThumb;
            data.save();
            res.send(data);
        }
    });
};

module.exports = { createFav, getFav, deleteFav, updateFav };