import express from "express";
import * as FeedbackController from '../controllers/feedbackController.js';

const router = express.Router();

router.route('/').get(FeedbackController.getFeedback);
router.route("/create").post(FeedbackController.createFeedback);


 

export default router;
