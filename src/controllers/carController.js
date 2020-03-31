import CarService from "../services/carService";

export default class CarController {
    static async getUsedCarsWithLessFuelLevel(req, res, next) {
        try {
            res.send(await CarService.getUsedCarsWithLessFuelLevel());
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

    static async updateCar(req, res, next) {
        try {
            res.send(await CarService.updateCarStatusByProducedDateAndMileage());
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