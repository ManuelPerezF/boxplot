import { IDBService } from "../db/types/dbService";
import { Box } from "../types/db/box";

export class BoxController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getBox(min: number, max: number, median: number,  q1: number, q3: number) : Promise<Box[]> {
        const box = await this.dbService.getBox(min, max, median, q1, q3);
        return box;
    }

}
