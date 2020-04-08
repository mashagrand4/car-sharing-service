import mongoose from 'mongoose';

const Driver = mongoose.Schema;

const DriverSchema = new Driver({
    licenseNumber: String,
    firstName: String,
    lastName: String,
    creditCardId: {
        type: Driver.Types.ObjectId,
        ref: 'CreditCard' },
});

export default mongoose.model('Driver', DriverSchema);
