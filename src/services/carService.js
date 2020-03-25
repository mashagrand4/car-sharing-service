import car from '../DAL/car';

export default class CarService {
    static async getUsedCarsWithLessFuelLevel() {
        const cars = await car.getAllСars();

        
    }
}