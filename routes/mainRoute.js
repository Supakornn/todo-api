const main = (req, res) => {
  res.json({
    Github: "H3X-T",
    Repo: "https://github.com/H3X-T/todo-api",
    Facebook: "Supakorn Ieamgomol",
    Instagram: "supakornigm",
    HowtoUse: {
      "editfile_exmaple.env": "DBURL, PORT",
      showAllTodo: { link: "/todoapi/getall", method: "GET" },
      showOneTodo: { link: "/todoapi/getone", method: "GET" },
      updateTodo: { link: "/todoapi/update/:id", method: "PATCH" },
      deleteTodo: { link: "/todoapi/delete/:id", method: "DELETE" }
    }
  });
};

module.exports = main;
