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

    static async addCarIntoPark(req, res, next) {
        try {
            res.send(await CarService.addCarIntoPark(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async moveCarsInToService(req, res, next) {
        try {
            res.send(await CarService.moveCarsInToService(req.body));
        } catch (error) {
            next(error);
        }
    };

    static async moveCarsInToPark(req, res, next) {
        try {
            res.send(await CarService.moveCarsInToPark(req.body));
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