const express = require('express');
const router = express.Router();
const router = require('../db/saveData');

router.get('/notes', (req, res) => {
    saveData
        .retrieveNotes()
        .then(notes=> res.json(notes))
})

router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
});

module.exports = router