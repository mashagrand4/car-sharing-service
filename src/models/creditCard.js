export default (sequelize, DataTypes) => {
    let CreditCard = sequelize.define('credit_card', {
        card_number: DataTypes.STRING,
        card_holder: DataTypes.STRING,
        card_valid_date: DataTypes.DATE,
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    CreditCard.sync();

    return CreditCard;
};