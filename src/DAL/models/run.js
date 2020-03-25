export default (sequelize, DataTypes) => {
    let Run = sequelize.define('run', {
        start_date: DataTypes.STRING,
        driver_id: DataTypes.STRING,
        start_fuel_level: DataTypes.STRING,
        start_mileage: DataTypes.INTEGER,
    });

    Run.sync({ force: true });

    return Run;
};