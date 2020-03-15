export default (sequelize, DataTypes) => {
    let Booking = sequelize.define('booking', {
        car_id: DataTypes.INTEGER,
        run_id: DataTypes.INTEGER,
        finish_fuel_level: DataTypes.STRING,
        finish_mileage: DataTypes.INTEGER,
    });

    Booking.sync({ force: true });

    return Booking;
};