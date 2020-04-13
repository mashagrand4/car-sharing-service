import models from '../models/';
import {fn, col} from 'sequelize';

export default {
    getCarsGroupedByBookingTimes: () => {
        return models.BookingHistory.findAll({
            attributes: ['car_id', [fn('count', col('car_id')), 'timesCount']],
            group: ['car_id'],
        });
    },
};