import Sequelize from 'sequelize';
import {database, username, password} from "./config"

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres',
    define: { raw: true },
    freezeTableName: true,
    timestamps: false,
});

export default sequelize;
