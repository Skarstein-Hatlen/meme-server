var express = require('express');
var router = express.Router();
const path = require('path');
const axios = require('axios');

router.get("/memes/:id", (req, res) => {
    const meme = memes.find(m => m.id === req.params.id);
    if(meme){
        res.render("meme", { meme });
    } else {
        res.status(404).send("Meme not found");
    }
});

module.exports = router;
