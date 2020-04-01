import CarService from "../services/carService";

export default class CarController {
    static async getCarsByStatusAndFuelLevel(req, res, next) {
        try {
            res.send(await CarService.getCarsByStatusAndFuelLevel(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async getReservedCarsAndNotAuthorized(req, res, next) {
        try {
            res.send(await CarService.getReservedCarsAndNotAuthorized());
        } catch (error) {
            next(error);
        }
    };

    static async addNewCar(req, res, next) {
        const car = req.body;
        try {
            res.send(await CarService.addNewCar(car));
        } catch (error) {
            next(error);
        }
    };

    static async updateCarStatusByProducedDateAndMileage(req, res, next) {
        try {
            res.send(await CarService.updateCarStatusByProducedDateAndMileage(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async updateCarGeoByStatusAndBookingTimes(req, res, next) {
        try {
            res.send(await CarService.updateCarGeoByStatusAndBookingTimes(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async deleteCarByVin(req, res, next) {
        try {
            res.send(await CarService.deleteCarByVin(req.body.vin));
        } catch (error) {
            next(error);
        }
    };
}