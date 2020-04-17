import CarService from "../services/carService";
import CAR_STATUS from '../constants'

export default class CarController {
    static async getCarsByStatusAndFuelLevel(req, res, next) {
        try {
            res.send(await CarService.getCarsByStatusAndFuelLevel(req.query));
        } catch (error) {
            next(error);
        }
    };

    static async getCarsByStatusAndNotAuthorized(req, res, next) {
        try {
            res.send(await CarService.getCarsByStatusAndNotAuthorized(req.query));
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
        const { productionDate, mileage } = req.body;
        try {
            res.send(await CarService.moveCarsToService({ productionDate, mileage, status: CAR_STATUS.IN_SERVICE}));
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