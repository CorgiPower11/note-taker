const express = require('express');
const router = express.Router();
const storeNotes = require('../db/storeNotes');

router.get('/notes', (req, res) => {
    storeNotes
        .retrieveNotes()
        .then(notes=> res.json(notes))
})

router.post('/notes', (req, res) => {
    storeNotes
        .addNote(req.body)
        .then((note) => res.json(note))
});

module.exports = router