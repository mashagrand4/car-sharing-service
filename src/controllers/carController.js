import CarService from "../services/carService";

export default class CarController {
    static async getCarsByStatusAndFuelLevel(req, res, next) {
        try {
            res.send(await CarService.getCarsByStatusAndFuelLevel(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async getCarsByStatusAndNotAuthorized(req, res, next) {
        try {
            res.send(await CarService.getCarsByStatusAndNotAuthorized(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async addCarToPark(req, res, next) {
        try {
            res.send(await CarService.addCarToPark(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async moveCarsToService(req, res, next) {
        try {
            res.send(await CarService.moveCarsToService(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async moveCarsToPark(req, res, next) {
        try {
            res.send(await CarService.moveCarsToPark(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async deleteCarFromPark(req, res, next) {
        try {
            res.send(await CarService.deleteCarFromPark(req.body));
        } catch (error) {
            next(error);
        }
    };
}