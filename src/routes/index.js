import express from 'express';
import carRouter from './car';

const router = express.Router();

router.use('/car', carRouter);

export default router;