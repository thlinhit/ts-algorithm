export type Instruction<T> = (t1: T, t2: T) => -1 | 0 | 1;

export class Comparator<T> {
  private constructor(private instruction: Instruction<T>) {}

  public static create<T>(instruction: Instruction<T>): Comparator<T> {
    return new Comparator(instruction);
  }

  public less(t1: T, t2: T): boolean {
    return this.instruction(t1, t2) < 0;
  }

  public greater(t1: T, t2: T): boolean {
    return this.instruction(t1, t2) > 0;
  }

  public equal(t1: T, t2: T): boolean {
    return this.instruction(t1, t2) === 0;
  }

  public lessOrEqual(t1: T, t2: T): boolean {
    return this.less(t1, t2) || this.equal(t1, t2);
  }
}
