import { Queue } from './queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should work', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBeNull();
    });

    test('should return correctly if the queue is empty', () => {
      expect(queue.isEmpty()).toBeTruthy();

      queue.enqueue(1);
      expect(queue.isEmpty()).toBeFalsy();

      queue.dequeue();
      expect(queue.isEmpty()).toBeTruthy();
    });
});
