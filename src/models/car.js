import {CAR_STATUS} from '../constants';

export default (sequelize, DataTypes) => {
    const Car =  sequelize.define('car', {
        vin: DataTypes.STRING,
        registration_number: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        production_date: DataTypes.DATE,
        status: {
            type: DataTypes.ENUM,
            values: Object.values(CAR_STATUS),
        },
        fuel_level: DataTypes.STRING,
        mileage: DataTypes.INTEGER,
        current_run_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        geo_latitude: DataTypes.STRING,
        geo_longitude: DataTypes.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    Car.sync();

    return Car;
};