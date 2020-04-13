import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getCarsByStatusAndFuelLevel', Car.getCarsByStatusAndFuelLevel);
router.get('/getCarsByStatusAndNotAuthorized', Car.getCarsByStatusAndNotAuthorized);
router.post('/addCarToPark', Car.addCarToPark);
router.put('/moveCarsToService', Car.moveCarsToService);
router.put('/moveCarsToPark', Car.moveCarsToPark);
router.delete('/deleteCarFromPark', Car.deleteCarFromPark);

export default router;
