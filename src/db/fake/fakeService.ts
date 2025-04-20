import { Box } from '../../types/db/box';

const FakeData: number[] = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));

export class FakeService {
  async getData(): Promise<number[]> {
    return FakeData;
  }
}