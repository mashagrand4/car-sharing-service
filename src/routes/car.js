import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getUsedCarsWithLessFuelLevel', Car.getUsedCarsWithLessFuelLevel);
router.get('/getReservedCarsAndNotAuthorized', Car.getReservedCarsAndNotAuthorized);
router.post('/addNewCar', Car.addNewCar);
router.put('/updateCar', Car.updateCar);
router.delete('/deleteCarByVin', Car.deleteCarByVin);

export default router;
