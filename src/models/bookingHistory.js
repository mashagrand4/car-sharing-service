import mongoose from 'mongoose';

const BookingHistory = mongoose.Schema;

const BookingHistorySchema = new BookingHistory({
    finish_fuel_level: {
        type: Number,
        alias: 'finishFuelLevel',
    },
    finish_mileage: {
        type: Number,
        alias: 'finishMileage'
    },
    car_id: {
        type: BookingHistory.Types.ObjectId,
        ref: 'Car',
        alias: 'carId'
    },
    run_id: {
        type: BookingHistory.Types.ObjectId,
        ref: 'Run',
        alias: 'runId'
    },
});

export default mongoose.model('BookingHistory', BookingHistorySchema, 'booking_history');