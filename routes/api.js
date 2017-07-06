var express = require('express');
var router = express.Router();

/*
 * Nossa rota para API de Feed
 * vai estar acessivel na URL
 * http://localhost:3000/api/feed
*/
router.get('/feed', (req, res) => {
    var myObjTweets = {
        tweets: [
            {
                "id": 1,
                "user": "stevie",
                "name": "Stevie Gray",
                "body": "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
                "likes": [
                    "stevie"
                ],
                "avatar": "../assets/images/avatar/stevie.jpg"
            },
            {
                "id": 2,
                "user": "jenny",
                "name": "Jenny Doe",
                "body": "Jenny Doe is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
                "likes": [],
                "avatar": "../assets/images/avatar/jenny.jpg"
            },
            {
                "id": 3,
                "user": "veronika",
                "name": "Veronika Sanders",
                "body": "Veronika is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
                "likes": [
                    "jenny",
                    "stevie"
                ],
                "avatar": "../assets/images/avatar/veronika.jpg"
            },
            {
                "id": 4,
                "user": "devdeck101",
                "name": "Dev Deck 101",
                "body": "Dev Deck 101 is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
                "likes": [],
                "avatar": "../assets/images/avatar/devdeck101.jpg"
            }
        ]
    }
    res.json(myObjTweets);
});

module.exports = router;