const Todo = require("../models/todoSchema");

// getalltodo
const getAllTodo = async (req, res) => {
  try {
    const alltodo = await Todo.find({});
    res.status(200).json({ alltodo });
  } catch (err) {
    res.status(500).json({ err });
  }
};

// getonetodo with id
const getOneTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(404).json({ err: `not found todo with id: ${id}` });
    }
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ err });
  }
};

// createtodo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

// updatetodo with id
const updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true
    });
    if (!todo) {
      return res.status(404).json({ err: `not found todo with id: ${id}` });
    }
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ err });
  }
};

//deletetodo with id
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOneAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).json({ err: `not found todo with id: ${id}` });
    }
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
};
