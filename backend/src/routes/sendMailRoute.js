import express from "express";
import * as SendMailController from '../controllers/sendMailController.js';

const router = express.Router();

router.route('/').post(SendMailController.sendEmail);


 

export default router;