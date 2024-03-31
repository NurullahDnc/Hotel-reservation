import express from "express";
import * as CommentController from '../controllers/commentController.js'

const route = express.Router();

route.route("/create").post(CommentController.createComment)
route.route("/accepted").get(CommentController.getAcceptedComments)
route.route("/").get(CommentController.getComment)
route.route("/:id").get(CommentController.getUserComment)
route.route("/delete/:id").post(CommentController.commentDelete)
route.route("/update/:id").put(CommentController.commentUpdate)
route.route("/setApproved/:id").post(CommentController.setApproved)
route.route("/setCancelled/:id").post(CommentController.setCancelled)



export default route;