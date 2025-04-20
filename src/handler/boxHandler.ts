import {Request, Response, NextFunction} from 'express';
import { BoxController } from '../controller/boxController';
import { FakeService } from '../db/fake/fakeService';


export class BoxHandler {
    boxController: BoxController;

    constructor(boxController: BoxController) {
        this.boxController = boxController;
    }

    async getBox(req: Request, res: Response, next: NextFunction) {
        try {
            const box = await this.boxController.getBox();
            res.json(box);

        } catch (error) {
            res. status(500).json({ error: 'Internal Server Error' });
        }

    }
}