import car from '../repositories/car';
import bookingHistory from '../repositories/bookingHistory';

export default {
    getCarsByStatusAndFuelLevel: async ({status, fuelLevel}) => {
        return await car.getCarsByStatusAndFuelLevel(status, fuelLevel);
    },

    getCarsByStatusAndNotAuthorized: async ({status}) => {
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

    addCarToPark: data => car.createCar(data),

    moveCarsToService: async ({productionDate, mileage, status}) => {
        const filteredCars = await car.getCarsByProducedDateAndMileage(productionDate, mileage);

        filteredCars.map(filteredCar => {
            filteredCar.status = status;
        });

        car.updateCars(filteredCars);

        return filteredCars;
    },

    moveCarsToPark: async ({status, times, geo}) => {
        let carData = await bookingHistory.getCarsGroupedByBookingTimes();

        carData = carData.filter((data) => {
            return data.timesCount >= times;
        }).map((car) => car.carId);

        const carsByBookingAndStatus = await car.getCarsByIdsAndStatus(carData, status);

        carsByBookingAndStatus.map(async car => {
            car.geoLatitude = geo.latitude;
            car.geoLongitude = geo.longitude;
        });

        car.updateCars(carsByBookingAndStatus);

        return carsByBookingAndStatus;
    },

    deleteCarFromPark: params => car.deleteCarBy(params),
}