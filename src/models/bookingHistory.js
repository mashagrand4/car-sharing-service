import mongoose from 'mongoose';

const BookingHistory = mongoose.Schema;

const BookingHistorySchema = new BookingHistory({
    finishFuelLevel: Number,
    finishMileage: Number,
    carId: {
        type: BookingHistory.Types.ObjectId,
        ref: 'Car' },
    runId: {
        type: BookingHistory.Types.ObjectId,
        ref: 'Run' },
});

export default mongoose.model('BookingHistory', BookingHistorySchema);
