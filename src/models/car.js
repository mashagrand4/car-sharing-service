import mongoose from 'mongoose';
import {CAR_STATUS} from "../constants";

const Car = mongoose.Schema;

const CarSchema = new Car({
    vin: String,
    registrationNumber: String,
    brand: String,
    model: String,
    productionDate: Date,
    status: {
        type: String,
        enum: Object.values(CAR_STATUS),
    },
    fuelLevel: String,
    mileage: Number,
    currentRunId: {
        type: Car.Types.ObjectId,
        ref: 'Run' },
    geoLatitude: String,
    geoLongitude: String,
});

export default mongoose.model('Car', CarSchema, 'car');