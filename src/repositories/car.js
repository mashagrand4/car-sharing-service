import models from '../models/';
import { Op } from 'sequelize';

export default {
    getCarsByStatusAndFuelLevel: (status, fuelLevel) => {
        return models.Car.findAll({
            where: {
                status,
                fuelLevel: {
                    [Op.lt]: fuelLevel
                }
            }
        })
    },
    getCarsByStatusAndNotAuthorized: (status) => {
        return models.Car.findAll({
            where: {
                status,
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
    },
    getCarsByProducedDateAndMileage: (productionDate, mileage) => {
        return models.Car.findAll({
            where: {
                $or: [
                    {
                        productionDate: { [Op.lt]: productionDate },
                    },
                    {
                        mileage: { [Op.gt]: mileage }
                    },
                ]
            }
        });
    },
    getCarsByIdsAndStatus: (ids, status) => {
        return models.Car.findAll({
            where: {
                id: {
                    [Op.in]: ids,
                },
                status: {
                    [Op.in]: status,
                }
            }
        });
    },

    createCar: data => {
        try {
            return models.Car.create(data);
        }
        catch(err) {
            throw err;
        }
    },
    deleteCarBy: params => {
        models.Car.destroy({
            where: {
                ...params
            }
        })
    },
    updateCars: cars => {
        cars.forEach(car => {
            car.save();
        });
    }
};