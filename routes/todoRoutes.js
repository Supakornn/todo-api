const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todoController");
const mainRoute = require("./mainRoute");

router.route("/").get(mainRoute);
router.route("/getall").get(getAllTodo);
router.route("/getone/:id").get(getOneTodo);
router.route("/create").post(createTodo);
router.route("/update/:id").patch(updateTodo);
router.route("/delete/:id").delete(deleteTodo);
module.exports = router;
