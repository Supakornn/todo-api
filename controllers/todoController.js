const Todo = require("../models/todoSchema");
const wrapper = require("../middleware/wrapper");
// getalltodo
const getAllTodo = wrapper(async (req, res) => {
  const alltodo = await Todo.find({});
  res.status(200).json({ alltodo });
});

// getonetodo with id
const getOneTodo = wrapper(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).json({ err: `not found todo with id: ${id}` });
  }
  res.status(200).json({ todo });
});

// createtodo
const createTodo = wrapper(async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
});

// updatetodo with id
const updateTodo = wrapper(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true
  });
  if (!todo) {
    return res.status(404).json({ err: `not found todo with id: ${id}` });
  }
  res.status(200).json({ todo });
});

//deletetodo with id
const deleteTodo = wrapper(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ err: `not found todo with id: ${id}` });
  }
  res.status(200).json({ todo });
});

module.exports = {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
};
