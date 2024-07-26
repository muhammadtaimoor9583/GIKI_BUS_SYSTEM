import express from 'express';

import protectRoute from '../middleware/protectRoute.js';
import { BookTicket, GetTicket } from '../controllers/ticket.controllers.js';


const router= express.Router();


router.post('/',protectRoute,BookTicket);
router.get('/:id',protectRoute,GetTicket);


export default router;