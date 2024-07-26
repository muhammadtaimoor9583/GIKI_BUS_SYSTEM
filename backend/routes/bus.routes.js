import express from 'express';
import { AddBus, GetAllBuses, GetBus } from '../controllers/bus.controllers.js';

const router=express.Router();


router.post('/',AddBus);
router.get('/:id',GetBus);
router.get('/',GetAllBuses);


export default router;