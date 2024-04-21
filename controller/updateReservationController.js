
import { Reservation } from '../models/reservationSchema.js';

export const updateReservationController = async (req, res, next) => {
    const { id } = req.params;

    try {
        // Convert the string id to ObjectId
      
        
        const existingReservation = await Reservation.findById(id);

        if (!existingReservation) {
            return res.json({
                success: false,
                message: 'Reservation not found',
            });
        }

        console.log(existingReservation);

        // Other logic for updating reservation
        const {firstName,  lastName, email, phone,  time, date} = req.body
        const updateReservation = await Reservation.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        )
        res.json({
            success: true,
            message: 'Reservation updated successfully',
            updateReservation: updateReservation,
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
