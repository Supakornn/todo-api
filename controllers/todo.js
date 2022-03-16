const Todo = require("../models/Schema");

const getAllTodo = (req, res) => {
  res.json({ data: "getAll" });
};

const getOneTodo = (req, res) => {
  res.json({ id: req.params.id });
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

const updateTodo = (req, res) => {
  res.json({ data: "update" });
};

const deleteTodo = (req, res) => {
  res.json({ data: "delete" });
};

module.exports = {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
};
