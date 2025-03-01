// const router = require('express').Router();
// const { getNotes, addNote, deleteNote } = require('../Controllers/NoteController');
// const ensureAuthenticated = require('../Middlewares/Auth');

// router.get('/notes', ensureAuthenticated, getNotes);
// router.post('/notes', ensureAuthenticated, addNote);
// router.delete('/notes/:id', ensureAuthenticated, deleteNote);

// module.exports = router;

const router = require('express').Router();
const { getNotes, addNote, deleteNote, updateNote } = require('../Controllers/NoteController'); // Import updateNote
const ensureAuthenticated = require('../Middlewares/Auth');

// Get all notes for the authenticated user
router.get('/notes', ensureAuthenticated, getNotes);

// Add a new note
router.post('/notes', ensureAuthenticated, addNote);

// Delete a note by ID
router.delete('/notes/:id', ensureAuthenticated, deleteNote);

// Update a note by ID
router.put('/notes/:id', ensureAuthenticated, updateNote); // Add this line

module.exports = router;