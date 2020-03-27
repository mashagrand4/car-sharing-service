import express from 'express';
import Car from "../controllers/CarController";

console.log(Car.getUsedCarsWithLessFuelLevel);

const router = express.Router();

router.get('/getUsedCarsWithLessFuelLevel', Car.getUsedCarsWithLessFuelLevel);
router.get('/getReservedCarsAndNotAuthorized', Car.getReservedCarsAndNotAuthorized);

export default router;
