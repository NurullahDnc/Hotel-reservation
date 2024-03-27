import express from "express";
import * as ReservationController from '../controllers/reservationController.js';

const router = express.Router();

router.route("/create").post(ReservationController.createReservation);

router.route('/').get(ReservationController.getApReservations);

 router.route("/cancelled").get(ReservationController.setCancelled);

 router.route("/Approved").get(ReservationController.setApproved);


export default router;
