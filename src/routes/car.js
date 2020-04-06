import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getCarsByStatusAndFuelLevel', Car.getCarsByStatusAndFuelLevel);
router.get('/getCarsByStatusAndNotAuthorized', Car.getCarsByStatusAndNotAuthorized);
router.post('/addNewCar', Car.addNewCar);
router.put('/updateCarStatusByProducedDateAndMileage', Car.updateCarStatusByProducedDateAndMileage);
router.put('/updateCarGeoByStatusAndBookingTimes', Car.updateCarGeoByStatusAndBookingTimes);
router.delete('/deleteCarByVin', Car.deleteCarByVin);

export default router;
