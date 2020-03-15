export default (sequelize, DataTypes) => {
    let Driver = sequelize.define('driver', {
        license_number: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        credit_card_id: DataTypes.INTEGER,
    });

    Driver.sync({ force: true });

    return Driver;
};