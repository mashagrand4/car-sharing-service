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

Car.belongsTo(Run, {
    foreignKey: 'current_run_id',
});
Run.belongsTo(Driver, {
    foreignKey: 'driver_id',
});
Driver.belongsTo(CreditCard, {
    foreignKey: 'credit_card_id',
});
BookingHistory.belongsTo(Car, {
    foreignKey: 'car_id',
});
BookingHistory.belongsTo(Run, {
    foreignKey: 'run_id',
});

export default { Car, Driver, CreditCard, Run, BookingHistory }