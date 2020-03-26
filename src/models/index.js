import connection from '../config/connection'
import {DataTypes} from "sequelize";
import car from "./car";
import driver from "./driver";
import creditCard from "./creditCard";
import run from "./run";
import bookingHistory from "./bookingHistory";

const {Car, Driver, CreditCard, Run, BookingHistory} = {
    Car: car(connection, DataTypes),
    Driver: driver(connection, DataTypes),
    CreditCard: creditCard(connection, DataTypes),
    Run: run(connection, DataTypes),
    BookingHistory: bookingHistory(connection, DataTypes),
};

Car.belongsTo(Run);
Run.hasMany(Car);

Run.belongsTo(Driver);
Driver.hasOne(Run);

Driver.belongsTo(CreditCard);
CreditCard.hasMany(Driver);

// BookingHistory.hasOne(Car);
// BookingHistory.hasOne(Run);
// Car.belongsTo(BookingHistory, {
//     foreignKey: 'car_id',
// });
// Run.belongsTo(BookingHistory, {
//     foreignKey: 'run_id',
// });


export default { Car, Driver, CreditCard, Run, BookingHistory }