import Car from '../models/car';

export default {
    getCarsByStatusAndFuelLevel: ( status, fuelLevel ) => {
        return Car.find(Car.translateAliases(
            {
                status,
                fuel_level: fuelLevel
            }
        )
    )},
    getCarsByStatusAndNotAuthorized: status => {
        return Car.find({ status })
            .populate({
                path: 'current_run_id' ,
                populate: {
                    path: 'driver_id',
                }
            })
            .where('current_run_id.driver_id.credit_card_id').equals(null);
    },
    getCarsByProducedDateAndMileage: (productionDate, mileage) => {
        return Car.find({
                production_date: productionDate,
                mileage
            }
        );
    },
    getCarsByIdsAndStatus: (ids, status) => {
        return Car.find(Car.translateAliases({
            _id: ids,
            status
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