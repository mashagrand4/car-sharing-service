import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getUsedCarsWithLessFuelLevel', Car.getUsedCarsWithLessFuelLevel);
//router.get('/getCarsByStatusAndNotAuthorized', Car.getCarsByStatusAndNotAuthorized);

export default router;
