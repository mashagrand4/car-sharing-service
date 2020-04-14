import mongoose from 'mongoose';

const Run = mongoose.Schema;

const RunSchema = new Run({
    start_date: {
        type: String,
        alias: 'startDate'
    },
    start_fuel_level: {
        type: Number,
        alias: 'startFuelLevel'
    },
    start_mileage: {
        type: Number,
        alias: 'startMileage',
    },
    driver_id: {
        type: Run.Types.ObjectId,
        ref: 'Driver',
        alias: 'driverId'
    },
});

export default mongoose.model('Run', RunSchema, 'run');