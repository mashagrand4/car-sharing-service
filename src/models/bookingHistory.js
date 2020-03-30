export default (sequelize, DataTypes) => {
    let BookingHistory = sequelize.define('booking_history', {
        finishFuelLevel: {
            type: DataTypes.STRING,
            field: 'finish_fuel_level',
        },
        finishMileage: {
            type: DataTypes.INTEGER,
            field: 'finish_mileage',
        },
        carId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'car_id'
        },
        runId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'run_id'
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    BookingHistory.sync();

    return BookingHistory;
};