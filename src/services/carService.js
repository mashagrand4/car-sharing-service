import car from '../repositories/car';
import bookingHistory from '../repositories/bookingHistory';
import models from "../models";

export default {
    getCarsByStatusAndFuelLevel: async ({status, fuelLevel}) => {
        return await car.getCarsByStatusAndFuelLevel(status, fuelLevel);
    },

    getCarsByStatusAndNotAuthorized: async status => {
        const cars = await car.getCarsByStatusAndNotAuthorized(status);
        return cars.map((car) => {
            const {
                vin,
                geoLatitude,
                geoLongitude,
                run: {driver: {firstName, lastName, licenseNumber}},
            } = car;
            return {vin, geoLatitude, geoLongitude, firstName, lastName, licenseNumber};
        });
    },

    addNewCar: data => car.createCar(data),

    updateCarStatusByProducedDateAndMileage: async ({productionDate, mileage, status}) => {
        const filteredCars = await car.getCarsByProducedDateAndMileage(productionDate, mileage);

        filteredCars.map(filteredCar => {
            filteredCar.status = status;
        });

        car.updateCars(filteredCars);

        return filteredCars;
    },

    updateCarGeoByStatusAndBookingTimes: async ({status, times, geo}) => {
        let carIds = await bookingHistory.getCarsGroupedByBookingTimes(status);
        carIds = carIds.filter(({dataValues}) => {
            return dataValues.cnt >= times;
        }).map((car) => car.carId);

        console.log(carIds);

        const carsByBookingAndStatus = await car.getCarsByIdsAndStatus(carIds, status);

        carsByBookingAndStatus.map(async car => {
            car.geoLatitude = geo.latitude;
            car.geoLongitude = geo.longitude;
        });

        car.updateCars(carsByBookingAndStatus);

        return carsByBookingAndStatus;

    },

    deleteCarByVin: vin => car.deleteCarByVin(vin),
}