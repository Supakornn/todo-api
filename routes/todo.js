const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todo");

router.route("/showall").get(getAllTodo);
router.route("/show/:id").get(getOneTodo);
router.route("/create").post(createTodo);
router.route("/update/:id").patch(updateTodo);
router.route("/delete").delete(deleteTodo);
module.exports = router;
