import car from '../repositories/car';
import bookingHistory from '../repositories/bookingHistory';

export default {
    getCarsByStatusAndFuelLevel: async ({status, fuelLevel}) => {
        return car.getCarsByStatusAndFuelLevel(status, fuelLevel);
    },

    getCarsByStatusAndNotAuthorized: async ({status}) => {
        const cars = await car.getCarsByStatusAndNotAuthorized(status);

        return cars.map((car) => {
            return {
                vin: car.vin,
                geoLatitude: car.geoLatitude,
                geoLongitude: car.geoLongitude,
            };
        });
    },

    addCarIntoPark: data => car.createCar(data),

    moveCarsInToService: async ({productionDate, mileage, status}) => {
        const filteredCars = await car.getCarsByProducedDateAndMileage(productionDate, mileage);

        filteredCars.map(filteredCar => {
            filteredCar.status = status;
        });

        car.updateCars(filteredCars);

        return filteredCars;
    },

    moveCarsInToPark: async ({status, times, geo}) => {
        let carData = await bookingHistory.getCarsGroupedByBookingTimes(status);

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