import car from '../repositories/car';
import {CAR_STATUS} from '../constants'

export default class CarService {
    static async getUsedCarsWithLessFuelLevel() {
        const { IN_USE, RESERVED } = CAR_STATUS;
        const fuelLevel = '25';

        //const carsByStatusAndFuel = await car.getCarsByStatusAndFuel(IN_USE, fuelLevel);
        const cars = await car.getCarsByStatusAndNotAuthorize(RESERVED);

        return cars.map((car) => {
            return car;
        });
    }

    // static async getCarsByStatusAndNotAuthorized() {
    //     const { RESERVED } = CAR_STATUS;
    //
    //     const carsByStatusAndFuel = await car.getCarsByStatusAndNotAuthorize(RESERVED);
    //
    //     console.log(carsByStatusAndFuel);
    //
    //     return carsByStatusAndFuel.map((car) => {
    //         return car;
    //     });
    // }
}