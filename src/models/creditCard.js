export default (sequelize, DataTypes) => {
    let CreditCard = sequelize.define('credit_card', {
        cardNumber: {
            type: DataTypes.STRING,
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
    },
    {
        freezeTableName: true,
        timestamps: false,
    });

    CreditCard.sync();

    return CreditCard;
};