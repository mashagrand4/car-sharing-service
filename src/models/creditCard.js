export default (sequelize, DataTypes) => {
    let CreditCard = sequelize.define('credit_card', {
        cardNumber: {
            type: DataTypes.INTEGER,
            field: 'card_number'
        },
        cardHolder: {
            type: DataTypes.STRING,
            field: 'card_holder'
        },
        cardValidDate: {
            type: DataTypes.DATE,
            field: 'card_valid_date'
        },
    });

    CreditCard.sync();

    return CreditCard;
};