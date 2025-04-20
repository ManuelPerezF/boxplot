import { Box } from '../../types/db/box';

const FakeData: number[] = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

export class FakeService {
  async getData(): Promise<number[]> {
    return FakeData;
  }
}