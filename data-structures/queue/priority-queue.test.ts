import { Comparator } from './../../util/comparator';
import { PriorityQueue } from './priority-queue';
describe('Priority Queue', () => {
  let queue: PriorityQueue<number>;

  beforeEach(() => {
    const numberComparator: Comparator<number> = Comparator.create((a1: number, a2: number) => {
      if (a1 == a2) return 0;
      else if (a1 < a2) return -1;
      else return 1;
    });

    queue = new PriorityQueue(numberComparator);
  });

  test('should work', () => {
    queue.offer(2);
    queue.offer(1);
    queue.offer(5);
    queue.offer(4);

    expect(queue.poll()).toBe(1);
    expect(queue.poll()).toBe(2);

    queue.offer(1);

    expect(queue.poll()).toBe(1);
    expect(queue.poll()).toBe(4);
    expect(queue.poll()).toBe(5);
  });
});
