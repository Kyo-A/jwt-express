const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/user/:userId/posts", [authJwt.verifyToken],controller.getAllPostsOfUser);
 
    app.post("/api/user/:userId/posts",[authJwt.verifyToken],controller.createPostByUser);
  
    app.put("/api/user/:userId/posts/:postId",[authJwt.verifyToken],controller.updatePostByUser);

    app.delete("/api/user/:userId/posts/:postId",[authJwt.verifyToken],controller.deletePostByUser);

  };
  