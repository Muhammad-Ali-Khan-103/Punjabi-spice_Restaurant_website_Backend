import { Reservation } from '../models/reservationSchema.js';

export const deleteReservationController = async (req, res, next) => {
    const { id } = req.params;

    try {
       
      
        
        const existingReservation = await Reservation.findById(id);

        if (!existingReservation) {
            return res.json({
                success: false,
                message: 'Reservation not found',
            });
        }

        console.log(existingReservation);

        
        
        const deleteReservation = await Reservation.findByIdAndDelete(id)
        res.json({
            success: true,
            message: 'Reservation deleted successfully',
            deleteReservation: deleteReservation,
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

