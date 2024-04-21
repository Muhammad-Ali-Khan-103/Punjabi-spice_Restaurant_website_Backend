import express from "express";
import {sendReservation} from "../controller/reservation.js";
import getAllReservationsController from "../controller/getAllReservationsController.js";
import { updateReservationController } from "../controller/updateReservationController.js";
import { deleteReservationController } from "../controller/deleteReservationController.js";


const router = express.Router();

router.post('/send', sendReservation);

router.get('/get-all-reservations', getAllReservationsController);

router.put('/put/:id', updateReservationController);

router.delete('/delete/:id', deleteReservationController);

export default router;