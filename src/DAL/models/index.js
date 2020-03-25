import connection from '../config/connection'
import {DataTypes} from "sequelize";
import car from "./car";
import driver from "./driver";
import creditCard from "./creditCard";
import run from "./run";
import booking from "./booking";

export default {
    Car: (connection, DataTypes) => car(connection, DataTypes),
    Driver: (connection, DataTypes) => driver(connection, DataTypes),
    CreditCard: creditCard(connection, DataTypes),
    Run: (connection, DataTypes) => run(connection, DataTypes),
    Booking: (connection, DataTypes) => booking(connection, DataTypes),
}