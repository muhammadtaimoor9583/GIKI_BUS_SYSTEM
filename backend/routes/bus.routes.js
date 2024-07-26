import express from 'express';
import { AddBus, DeleteBus, GetAllBuses, GetBus } from '../controllers/bus.controllers.js';

const router=express.Router();


router.post('/',AddBus);
router.delete('/:id',DeleteBus);
router.get('/:id',GetBus);
router.get('/',GetAllBuses);


export default router;