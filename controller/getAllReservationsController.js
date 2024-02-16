import { Reservation } from "../models/reservationSchema.js";

const getAllReservationsController = async(req, res) =>{
    try {
        const allReservations = await Reservation.find()
    return res.json({
        success: true,
        reservations: allReservations,
    })    
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
    
}

export default getAllReservationsController;