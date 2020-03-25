import express from 'express';
import Car from "../controllers/CarController";

const router = express.Router();

router.get('/getUsedCarsWithLessFuelLevel', Car.getUsedCarsWithLessFuelLevel);

export default router;
