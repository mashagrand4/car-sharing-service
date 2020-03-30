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
}