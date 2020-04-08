import mongoose from 'mongoose';

const CreditCard = mongoose.Schema;

const CreditCardSchema = new CreditCard({
    cardNumber: Number,
    cardHolder: String,
    cardValidDate: Date,
});

export default mongoose.model('CreditCard', CreditCardSchema);
