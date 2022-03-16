const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todoController");

router.route("/getalltodo").get(getAllTodo);
router.route("/getonetodo/:id").get(getOneTodo);
router.route("/createtodo").post(createTodo);
router.route("/updatetodo/:id").patch(updateTodo);
router.route("/deletetodo/:id").delete(deleteTodo);
module.exports = router;
