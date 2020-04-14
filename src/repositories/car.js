import Car from '../models/car';
import Run from '../models/run';
import Driver from '../models/driver';

export default {
    getCarsByStatusAndFuelLevel: ( status, fuelLevel ) => {
        return Car.find({
            status,
            fuel_level: {
                $lt: fuelLevel
            }
        }
    )},
    getCarsByStatusAndNotAuthorized: status => {
        return Car.find({ status })
            .populate({
                path: 'current_run_id' ,
                model: Run,
                populate: {
                    path: 'current_run_id.driver_id',
                    model: Driver,
                }
            })
            .where('current_run_id.driver_id.credit_card_id').equals(null);
    },
    getCarsByProducedDateAndMileage: (productionDate, mileage) => {
        return Car.find({
                production_date: {
                    $lt: productionDate
                },
                mileage: {
                    $gt: mileage
                }
            }
        );
    },
    getCarsByIdsAndStatus: (ids, status) => {
        return Car.find(Car.translateAliases({
            _id: {
                $in: ids
            },
            status: {
                $in: status
            }
        }));
    },
    createCar: data => {
        try {
            const car = new Car(data);
            car.save();
        }
        catch(err) {
            throw err;
        }
    },
    deleteCarBy: params => {
        return Car.findOneAndDelete({
            ...params
        })
    },
    updateCars: cars => {
        cars.forEach(car => {
            car.save();
        });
    }
};