import { Stack } from './stack';

describe('Stack', () => {
  let stack: Stack<string>;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should work', () => {
    stack.push('a');
    stack.push('b');

    expect(stack.pop()).toBe('b');
    expect(stack.pop()).toBe('a');
    expect(stack.pop()).toBe(null);
  });

  test('should return correctly if the stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();

    stack.push('a');
    expect(stack.isEmpty()).toBeFalsy();

    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });
});
