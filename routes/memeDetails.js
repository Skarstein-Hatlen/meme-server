var express = require('express');
var router = express.Router();
const memes = require('./memes').memes;

router.get("/:id", (req, res) => {
    if(memes){
        const meme = memes.find(m => m.id === req.params.id);
        if(meme){
            res.render("memeDetails", { meme: meme, user: req.user});
        } else {
            res.status(404).send("Meme not found");
        }
    } else {
        res.status(404).send("Memes not found");
    }
});

module.exports = router