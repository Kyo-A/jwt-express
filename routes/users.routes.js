const controller = require("../controllers/users.controller");

module.exports = function(app) {
    
    app.get("/api/users", controller.getUsers);

    app.get("/api/users/:id",controller.getUserById);
 
    app.post("/api/users",controller.createUser);
  
    app.put("/api/users/:id",controller.updateUser);

    app.delete("/api/users/:id",controller.deleteUser);

  };