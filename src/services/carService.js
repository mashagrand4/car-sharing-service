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
            return {
                vin: car.vin,
                geo_latitude: car.geo_latitude,
                geo_longitude: car.geo_longitude,
                first_name: car.run.driver.first_name,
                last_name: car.run.driver.last_name,
                license_number: car.run.driver.license_number,
            };
        });
    },
}