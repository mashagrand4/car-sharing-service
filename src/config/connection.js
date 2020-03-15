import Sequelize from 'sequelize';
import {database, username, password} from "./config"

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
