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
    createNewCar: car => {
        try {
            return models.Car.create(car);
        }
        catch(err) {
            throw err;
        }
    },
    updateCarStatusByProducedDateAndMileage: async (producedDate, mileage, status) => {
        const cars = await models.Car.findAll({
            where: {
                productionDate: {
                    [Op.lt]: producedDate,
                },
                mileage: {
                    [Op.gt]: mileage,
                }
            }
        });

        cars.map(async car => {
            car.status = status;
            await car.save();
        });

        return cars;
    },
    updateCarGeoByBookingAndStatus: async (IN_USE, FREE,  geo) => {
        const cars = await models.Car.findAll({
            where: {
                [Op.and]: [{ status: IN_USE }, { status: FREE }],
                mileage: {
                    [Op.gt]: mileage,
                }
            }
        });

        cars.map(async car => {
            car.geoLatitude = geo.latitude;
            car.geoLongitude = geo.longitude;
            await car.save();
        });

        return cars;
    },
    deleteCarByVin: vin => {
        models.Car.destroy({
            where: {
                vin
            }
        })
    }
};