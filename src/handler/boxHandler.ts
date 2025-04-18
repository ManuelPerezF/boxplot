import {Request, Response, NextFunction} from 'express';
import { BoxController } from '../controller/boxController';
import { FakeService } from '../db/fake/fakeService';


export class BoxHandler {
    boxController: BoxController;
    constructor(boxController: BoxController) {
        this.boxController = boxController;
    }

    async getBox(req: Request, res: Response) {
        try {
            const box = this

        } catch (error) {

        }

    }
}