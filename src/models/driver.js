export default (sequelize, DataTypes) => {
    let Driver = sequelize.define('driver', {
        licenseNumber: {
            type: DataTypes.STRING,
            field: 'license_number',
        },
        firstName:{
            type: DataTypes.STRING,
            field: 'first_name',
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name'
        },
        creditCardId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'credit_card_id'
        },
    });

    Driver.sync();

    return Driver;
};