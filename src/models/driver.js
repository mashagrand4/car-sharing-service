import mongoose from 'mongoose';

const Driver = mongoose.Schema;

const DriverSchema = new Driver({
    license_number: {
        type: String,
        alias: 'licenseNumber'
    },
    first_name: {
        type: String,
        alias: 'firstName'
    },
    last_name: {
        type: String,
        alias: 'lastName'
    },
    credit_card_id: {
        type: Driver.Types.ObjectId,
        ref: 'creditCard',
        alias: 'creditCardId'
    },
});

export default mongoose.model('Driver', DriverSchema, 'driver');
