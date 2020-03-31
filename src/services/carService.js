import car from '../repositories/car';
import {CAR_STATUS} from '../constants'

export default {
    getUsedCarsWithLessFuelLevel: async () => {
        const { IN_USE } = CAR_STATUS;
        const fuelLevel = '25';

        const carsByStatusAndFuel = await car.getCarsByStatusAndFuel(IN_USE, fuelLevel);

        return carsByStatusAndFuel.map((car) => {
            return car;
        });
    },
    getReservedCarsAndNotAuthorized: async () => {
        const { RESERVED } = CAR_STATUS;

        const carsByStatusAndAuthorize = await car.getCarsByStatusAndNotAuthorize(RESERVED);

        return carsByStatusAndAuthorize.map((car) => {
            const {
                vin,
                geoLatitude,
                geoLongitude,
                run: {driver: {firstName, lastName, licenseNumber}},
            } = car;

            return {vin, geoLatitude, geoLongitude, firstName, lastName, licenseNumber};
        });
    },
    addNewCar: carData => car.createNewCar(carData),
    updateCarStatusByProducedDateAndMileage: () => {
        const { IN_SERVICE } = CAR_STATUS;
        const mileage = 100000;
        const productionDate = new Date('01/01/2017');

        return car.updateCarStatusByProducedDateAndMileage(productionDate, mileage, IN_SERVICE);
    },
    updateCarGeoByBookingAndStatus: () => {
        const [ IN_USE, FREE ] = CAR_STATUS;

        return car.updateCarGeoByBookingAndStatus([ IN_USE, FREE ]);
    },
    deleteCarByVin: vin => car.deleteCarByVin(vin),
}