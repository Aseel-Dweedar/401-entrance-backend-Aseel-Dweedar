"use strict";

const axios = require("axios");

const apiData = (req, res) => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then((axiosRes) => {
        res.send(axiosRes.data.drinks);
    });
};

module.exports = apiData;