import CarService from "../services/carService";

export default class CarController {
    static async getUsedCarsWithLessFuelLevel(req, res, next) {
        try {
            res.send(await CarService.getUsedCarsWithLessFuelLevel());
        } catch (error) {
            next(error);
        }
    };
}