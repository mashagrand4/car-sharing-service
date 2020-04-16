import {CAR_STATUS} from '../constants';

export default (sequelize, DataTypes) => {
    const Car =  sequelize.define('car', {
        vin: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        registrationNumber: {
            type: DataTypes.STRING,
            field: 'registration_number',
            validate: {
                notEmpty: true,
            },
        },
        brand: {
            type: DataTypes.STRING,
        },
        model: DataTypes.STRING,
        productionDate: {
            type: DataTypes.DATE,
            field: 'production_date',
        },
        status: {
            type: DataTypes.ENUM,
            values: Object.values(CAR_STATUS),
            validate: {
                notEmpty: true,
            },
        },
        fuelLevel: {
            type: DataTypes.INTEGER,
            field: 'fuel_level',
            validate: {
                notEmpty: true,
            },
        },
        mileage: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true,
            },
        },
        currentRunId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'current_run_id',
        },
        geoLatitude: {
            type: DataTypes.INTEGER,
            field: 'geo_latitude',
            validate: {
                notEmpty: true,
            },
        },
        geoLongitude: {
            type: DataTypes.INTEGER,
            field: 'geo_longitude',
            validate: {
                notEmpty: true,
            },
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    Car.sync();

    return Car;
};