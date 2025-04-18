export interface Box {
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
    outliers: number[];
}