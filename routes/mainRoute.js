const main = (req, res) => {
  res.json({
    Github: "H3X-T",
    Repo: "https://github.com/H3X-T/todo-api",
    Facebook: "Supakorn Ieamgomol",
    Instagram: "supakornigm",
    HowtoUse: {
      "editfile_exmaple.env": "DBURL, PORT",
      showAllTodo: { link: "/api/todo/getalltodo", method: "GET" },
      showOneTodo: { link: "/api/todo/getonetodo", method: "GET" },
      updateTodo: { link: "/api/todo/updatetodo/:id", method: "PATCH" },
      deleteTodo: { link: "/api/todo/deletetodo/:id", method: "DELETE" }
    }
  });
};

module.exports = main;
