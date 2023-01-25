var express = require('express');
var router = express.Router();
const path = require('path');
const axios = require('axios');
const env = require('../env.json');

let memes;

router.get("/:id", (req, res) => {
    const meme = memes.find(m => m.id === req.params.id);
    if(meme){
        res.render("meme", { meme: meme, user: req.user});
    } else {
        res.status(404).send("Meme not found");
    }
});

router.get("/", (req, res) => {
    axios.get(env.API_URL)
        .then(response => {
            // Store the memes in a global variable
            memes = response.data.data.memes;
            // Render the memes view and pass the memes data
            res.render("memes", { memes: memes, user: req.user });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
});

module.exports = router
