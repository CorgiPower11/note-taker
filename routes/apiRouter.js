const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.retrieveNotes()
    res.then(notes=> res.json(notes))
})

router.post('/notes', (req, res) => {
    res.addNote(req.body)
    res.then((note) => res.json(note))
});

module.exports = router