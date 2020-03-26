export default (sequelize, DataTypes) => {
    let BookingHistory = sequelize.define('booking_history', {
        finish_fuel_level: DataTypes.STRING,
        finish_mileage: DataTypes.INTEGER,
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        run_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    BookingHistory.sync();

    return BookingHistory;
};