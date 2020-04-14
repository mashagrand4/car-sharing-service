import mongoose from 'mongoose';

const CreditCard = mongoose.Schema;

const CreditCardSchema = new CreditCard({
    card_number: {
        type: Number,
        alias: 'cardNumber',
    },
    card_holder: {
        type: String,
        alias: 'cardHolder'
    },
    card_valid_date: {
        type: Date,
        alias: 'cardValidDate'
    },
});

export default mongoose.model('CreditCard', CreditCardSchema, 'credit_card');