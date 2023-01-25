var express = require('express');
var router = express.Router();
const path = require('path');
const axios = require('axios');
const env = require('../env.json');

let memes;

router.get("/", (req, res) => {
    axios.get(env.API_URL)
        .then(response => {
            // Store the memes in a global variable
            memes = response.data.data.memes;
            // Render the memes view and pass the memes data
            res.render("memes", { memes });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
});

module.exports = router