import express from "express";
import * as ReservationController from '../controllers/reservationController.js';

const router = express.Router();

router.route("/create").post(ReservationController.createReservation);

router.route('/reservations').get(ReservationController.getUserReservations);

router.route('/').get(ReservationController.getReservations);

router.route('/cancelled/:id').post(ReservationController.setCancelled);

router.route('/approved/:id').post(ReservationController.setApproved);



export default router;
