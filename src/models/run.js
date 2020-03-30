export default (sequelize, DataTypes) => {
    let Run = sequelize.define('run', {
        startDate: {
            type: DataTypes.STRING,
            field: 'start_date'
        },
        startFuelLevel: {
            type: DataTypes.STRING,
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
},
    {
        freezeTableName: true,
        timestamps: false,
    });

    Run.sync();

    return Run;
};