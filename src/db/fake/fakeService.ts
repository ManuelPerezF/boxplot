const FakeData = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

export class FakeService {

    async getBox(min: number, max: number, median: number, q1: number, q3: number): Promise<any[]> {
        return FakeData;
    }
}