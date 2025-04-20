import { IDBService } from "../db/types/dbService";
import { Box } from "../types/db/box";

export class BoxController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getBox(): Promise<{ data: number[]; box: Box }> 
    // Promise para  el array de datos y el box
    {
        const data = await this.dbService.getData();
        const box = this.calculateBox(data);
        return { data, box };
    }

    calculateBox(data: number[]): Box { 
        const sortedData = data.sort((a, b) => a - b); 
        // Ordena el array de menor a mayor

        const median = (arr: number[]): number => {
            const mid = Math.floor(arr.length / 2);
            return (arr[mid - 1] + arr[mid]) / 2; 
            // Toma el valor de la posicion 50 y 51 para sacar la mediana
        };

        const q1 = median(sortedData.slice(0, Math.floor(sortedData.length / 2)));
        const q3 = median(sortedData.slice(Math.ceil(sortedData.length / 2)));
        const med = median(sortedData);
        const min = sortedData[0];  
        // Toma el valor de la posicion 0 para sacar el minimo
        const max = sortedData[sortedData.length - 1]; 
        // Toma el valor de la posicion 99 para sacar el maximo

        const iqr = q3 - q1;
        const lower = q1 - 1.5 * iqr;
        const upper = q3 + 1.5 * iqr;
        const outliers =  sortedData.filter((value) => value < lower || value > upper);
        // Filtra los valores que son menores a lower o mayores a upper para sacar los outliers

        return {
            min, max, median:med, q1, q3, outliers
        }
    }
}
