import mongoose from 'mongoose';
import {CAR_STATUS} from "../constants";
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const Car = mongoose.Schema;

const CarSchema = new Car({
    vin: String,
    registration_number: {
        type: String,
        alias: 'registrationNumber',
    },
    brand: String,
    model: String,
    production_date: {
        type: Date,
        alias: 'productionDate',
    },
    status: {
        type: String,
        enum: Object.values(CAR_STATUS),
    },
    fuel_level: {
        type: Number,
        alias: 'fuelLevel',
    },
    mileage: Number,
    current_run_id: {
        type: Car.Types.ObjectId,
        ref: 'run',
        alias: 'currentRunId'
    },
    geo_latitude: {
        type: Number,
        alias: 'geoLatitude',
    },
    geo_longitude: {
        type: Number,
        alias: 'geoLongitude',
    },
});

CarSchema.plugin(deepPopulate);


export default mongoose.model('Car', CarSchema, 'car');