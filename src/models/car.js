import {CAR_STATUS} from '../constants';

export default (sequelize, DataTypes) => {
    const Car =  sequelize.define('car', {
        vin: DataTypes.STRING,
        registrationNumber: {
            type: DataTypes.STRING,
            field: 'registration_number',
        },
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        productionDate: {
            type: DataTypes.DATE,
            field: 'production_date',
        },
        status: {
            type: DataTypes.ENUM,
            values: Object.values(CAR_STATUS),
        },
        fuelLevel: {
            type: DataTypes.STRING,
            field: 'fuel_level'
        },
        mileage: DataTypes.INTEGER,
        currentRunId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'current_run_id'
        },
        geoLatitude: {
            type: DataTypes.STRING,
            field: 'geo_latitude',
        },
        geoLongitude: {
            type: DataTypes.STRING,
            field: 'geo_longitude'
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    Car.sync();

    return Car;
};