import { Box } from '../../types/db/box';

export interface IDBService {
    getBox(min: number, max: number, median: number,  q1: number, q3: number): Promise<Box[]>;
}