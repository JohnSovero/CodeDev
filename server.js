const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 80;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://172.212.108.242:27017/codedev', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const categoriesSchema = new mongoose.Schema({
    name: String,
});
const student = mongoose.model('students', categoriesSchema);

// Add this to server.js
app.get('/students', async (req, res) => {
    const todos = await student.find();
    res.json(todos);
});
// Create a new todo
app.post('/students', async (req, res) => {
    const newTodo = new student(req.body);
    await newTodo.save();
    res.json(newTodo);
});
// Update an existing todo
app.put('/students/:id', async (req, res) => {
    const updatedTodo = await student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
});
// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    await student.findByIdAndRemove(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
});
