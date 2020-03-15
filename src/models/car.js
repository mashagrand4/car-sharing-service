export default (sequelize, DataTypes) => {
    let Car = sequelize.define('car', {
        vin: DataTypes.STRING,
        registration_number: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        production_date: DataTypes.DATE,
        status: DataTypes.STRING,
        fuel_level: DataTypes.STRING,
        mileage: DataTypes.INTEGER,
        current_run_id: DataTypes.INTEGER,
        geo_latitude: DataTypes.STRING,
        geo_longitude: DataTypes.STRING,

    });

    Car.sync({ force: true });

    return Car;
};