import express from "express";
import {sendReservation} from "../controller/reservation.js";
import getAllReservationsController from "../controller/getAllReservationsController.js";

const router = express.Router();

router.post('/send', sendReservation);

router.get('/get-all-reservations', getAllReservationsController);


export default router;