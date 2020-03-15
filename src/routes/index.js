import express from 'express';
import models from '../models'

const router = express.Router();

router.post('/addCreditCard', (req, res) => {
    models.CreditCard.sync({ force: true }).then(() => {
        return models.CreditCard.create({
            card_number: '12345',
            card_holder: 'test testov',
            card_valid_date: new Date(),
        });
    });

});

export default router;
