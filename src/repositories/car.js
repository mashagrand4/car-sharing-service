import models from '../models/';
import {Op} from 'sequelize'

export default {
    getCarsByStatusAndFuel: (status, fuelLevel) => {
        return models.Car.findAll({
            where: {
                status: status,
                fuelLevel: {
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
            attributes: ['vin', 'geoLatitude', 'geoLongitude'],
            include: [
                {
                    model: models.Run,
                    include: [
                        {
                            model: models.Driver,
                            where: {
                                creditCardId: null,
                            },
                            attributes: ['firstName', 'lastName', 'licenseNumber'],
                        }
                    ]
                }
            ],
        });
    }
};