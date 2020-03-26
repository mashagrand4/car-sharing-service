export default (sequelize, DataTypes) => {
    let Driver = sequelize.define('driver', {
            license_number: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            credit_card_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );

    Driver.sync();

    return Driver;
};