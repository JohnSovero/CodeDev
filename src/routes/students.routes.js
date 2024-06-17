const { Router } = require('express');
const router = Router();

const {
    renderStudents,
    renderStudent,
    createNewStudent,
    putStudent,
    deleteStudent } = require('../controllers/students.controller');

// Get
router.get('/students', renderStudents);

// Get by id
router.get('/students/:id', renderStudent);

// Post
router.post('/students', createNewStudent);

// Update
router.put('/students/:id', putStudent);

// Delete
router.delete('/students/:id', deleteStudent);

module.exports = router;