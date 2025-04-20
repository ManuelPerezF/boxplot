import { IDBService } from "../db/types/dbService";
import { Box } from "../types/db/box";

export class BoxController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getBox(): Promise<Box> {
        const data = await this.dbService.getData();
        return this.calculateBox(data);
    }

    calculateBox(data: number[]): Box {
        const sortedData = data.sort((a, b) => a - b);
    }

}
