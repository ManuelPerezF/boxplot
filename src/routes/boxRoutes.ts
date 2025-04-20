import express from 'express';
import { BoxController } from '../controller/boxController';
import { BoxHandler } from '../handler/boxHandler';
import { FakeService } from '../db/fake/fakeService';


const router = express.Router();
/*
const fakeService = new FakeService();
const boxController = new BoxController(fakeService); 

const boxHandler = new BoxHandler(boxController);

*/

export default router;
