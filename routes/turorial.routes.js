const { authJwt } = require("../middleware");
const tutorials = require("../controllers/tutorial.controller.js");

module.exports = app => {

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/",[authJwt.verifyToken, authJwt.isUser], tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/",[authJwt.verifyToken, authJwt.isUser], tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published",[authJwt.verifyToken, authJwt.isUser], tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id",[authJwt.verifyToken, authJwt.isUser], tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id",[authJwt.verifyToken, authJwt.isUser], tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id",[authJwt.verifyToken, authJwt.isUser],tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/",[authJwt.verifyToken, authJwt.isUser], tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };