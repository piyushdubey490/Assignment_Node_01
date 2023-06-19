//Assignment 01

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Database connection:
mongoose.connect('use your own mongodb connection string', {
  
});
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});
mongoose.connection.on("error", (error) => {
  console.error("Error connecting to the database:", error);
});

// Middleware:
app.use(express.json());

// Creating APIs

// To-Do List APIs
// 1. Create a new task
app.post('/api/todo', (req, res) => {
  const { id,title, description } = req.body;

  // Validate the request body
  if (!id|| !title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  // Create a new to-do item
  const newItem = {
    id,
    title,
    description,
    status: 'not started',
  };

  console.log('New to-do item:', newItem);

  // Return the response
  res.status(201).json({ message: 'To-Do item created successfully', item: newItem });
});

// Define an array to store to-do items
let todoItems = [];

// 2. Read all tasks
app.get('/api/todo', (req, res) => {
    res.json(todoItems);
});

// 3. Read a single task
app.get('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    const item = todoItems.find((item) => item.id === id);
    if (!item) {
      res.status(404).json({ error: 'To-Do item not found' });
    } else {
      res.json(item);
    }
  });

// 4. Update a task
app.put('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const itemIndex = todoItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      res.status(404).json({ error: 'To-Do item not found' });
    } else {
      const updatedItem = {
        ...todoItems[itemIndex],
        title: title || todoItems[itemIndex].title,
        description: description || todoItems[itemIndex].description,
        status: status || todoItems[itemIndex].status,
      };
      todoItems[itemIndex] = updatedItem;
      res.json(updatedItem);
    }
  });

// 5. Delete a task
app.delete('/api/todo/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = todoItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      res.status(404).json({ error: 'To-Do item not found' });
    } else {
      const deletedItem = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      res.json(deletedItem);
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
