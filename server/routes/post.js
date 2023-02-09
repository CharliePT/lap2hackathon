const { Router } = require('express');
const postController = require('../controller/post.js');
const postRouter = Router();

postRouter.get("/", postController.index);
postRouter.post("/", postController.create);
postRouter.patch("/:id", postController.update);
postRouter.get("/:id", postController.show);
postRouter.delete("/:id", postController.destroy);
module.exports = postRouter;