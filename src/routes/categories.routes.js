const { Router } = require('express');
const router = Router();

const { 
    renderCategoryForm, 
    renderCategories,
    renderCategory,
    createNewCategory, 
    renderPutForm, 
    putCategory, 
    deleteCategory } = require('../controllers/categories.controller');

// Get
router.get('/categories', renderCategories);

// Get by id
router.get('/categories/:id', renderCategory);

// Post
router.get('/categories/post', renderCategoryForm);
router.post('/categories', createNewCategory);

// Update
router.get('/categories/update/:id', renderPutForm);
router.put('/categories/:id', putCategory);

// Delete
router.delete('/categories/:id', deleteCategory);

module.exports = router;