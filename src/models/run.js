export default (sequelize, DataTypes) => {
    let Run = sequelize.define('run', {
        startDate: {
            type: DataTypes.DATE,
            field: 'start_date'
        },
        startFuelLevel: {
            type: DataTypes.INTEGER,
            field: 'start_fuel_level',
        },
        startMileage: {
            type: DataTypes.INTEGER,
            field: 'start_mileage',
        },
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'driver_id'
        },
    });

    Run.sync();

    return Run;
};