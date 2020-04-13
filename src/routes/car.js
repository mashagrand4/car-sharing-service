import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getCarsByStatusAndFuelLevel', Car.getCarsByStatusAndFuelLevel);
router.get('/getCarsByStatusAndNotAuthorized', Car.getCarsByStatusAndNotAuthorized);
router.post('/addCarIntoPark', Car.addCarIntoPark);
router.put('/moveCarsInToService', Car.moveCarsInToService);
router.put('/moveCarsInToPark', Car.moveCarsInToPark);
router.delete('/deleteCarFromPark', Car.deleteCarFromPark);

export default router;
