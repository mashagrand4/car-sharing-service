import models from '../models/';
import {Op} from 'sequelize'

export default {
    getCarsByStatusAndFuel: async (status, fuelLevel) => {
        return models.Car.findAll({
            where: {
                status: status,
                fuel_level: {
                    [Op.lt]: fuelLevel,
                }
            }
        });
    },
    getCarsByStatusAndNotAuthorize: async (status) => {
        return models.Car.findAll({
            where: {
                status: status,
            },
            include: [
                {
                    model: models.Run,
                    include: [
                        {
                            model: models.Driver,
                            where: {
                                credit_card_id: null,
                            }
                        }
                    ]
                }
            ]
        })
    }
};