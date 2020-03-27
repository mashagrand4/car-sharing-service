import models from '../models/';
import {Op} from 'sequelize'

export default {
    getCarsByStatusAndFuel: (status, fuelLevel) => {
        return models.Car.findAll({
            where: {
                status: status,
                fuel_level: {
                    [Op.lt]: fuelLevel,
                }
            }
        });
    },
    getCarsByStatusAndNotAuthorize: status => {
        return models.Car.findAll({
            where: {
                status: status,
            },
            attributes: ['vin', 'geo_latitude', 'geo_longitude'],
            include: [
                {
                    model: models.Run,
                    include: [
                        {
                            model: models.Driver,
                            where: {
                                credit_card_id: null,
                            },
                            attributes: ['first_name', 'last_name', 'license_number'],
                        }
                    ]
                }
            ],
        });
    }
};