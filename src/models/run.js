import mongoose from 'mongoose';

const Run = mongoose.Schema;

const RunSchema = new Run({
    startDate: String,
    startFuelLevel: Number,
    startMileage: Number,
    driverId: {
        type: Run.Types.ObjectId,
        ref: 'Driver' },
});

export default mongoose.model('Run', RunSchema);
