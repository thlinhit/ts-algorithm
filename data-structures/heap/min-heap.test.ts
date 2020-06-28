import { MinHeap } from './min-heap';
import { Comparator } from '../../util/comparator';

describe('MinHeap', () => {
  test('should work', () => {
    const numberComparator: Comparator<number> = Comparator.create((a1: number, a2: number) => {
      if (a1 == a2) return 0;
      else if (a1 < a2) return -1;
      else return 1;
    });

    const heap = new MinHeap(numberComparator);

    heap.push(7);
    heap.push(3);
    heap.push(4);

    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(4);

    heap.push(2);
    expect(heap.pop()).toBe(2);

    expect(heap.pop()).toBe(7);

    expect(() => { heap.push(null) }).toThrowError();
    expect(() => { heap.pop() }).toThrowError();
  });
});
