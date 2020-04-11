/*
**Dutch national flag**
Given an array of n buckets, each containing a red, white, blue pebble, sort them by color.
The allowed operations are:
    * swap(i, j): swap the pebble in bucket i with the pebble in bucket j.
    * color(i); determine the color of the pebble in bucket i.

The performance requirements are as follows:

    * At most n calls to color()
    * At most n calls to swap()
    * Constant extra space.
*/

import { getRandomInt } from '../../../util/helper.util';

describe('DutchNationalFlag', () => {
  it('test', done => {
    let i = 0;
    while (i++ < 1000) {
      // Given
      const length = getRandomInt(1000) + 100;
      const arr = generateArr(length);
      const originalArr = [...arr];

      // When
      const sortMethod = new DutchNationalFlag(arr);
      sortMethod.sort();

      // Then
      if (isCorrectOrder(arr) && sortMethod.colorCount <= length && sortMethod.swapCount <= length) {
        done();
      } else {
        done(originalArr);
      }
    }
  });

  function isCorrectOrder(arr: string[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== arr[i]) {
        if (
          (arr[i - 1] === WHITE && arr[i] === RED) ||
          (arr[i - 1] === BLUE && arr[i] === WHITE) ||
          (arr[i - 1] === BLUE && arr[i] === RED)
        ) {
          return false;
        }
      }
    }
    return true;
  }

  function generateArr(n: number): string[] {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
      const radNumber = getRandomInt(3);
      if (radNumber === 0) {
        arr[i] = RED;
      } else if (radNumber === 1) {
        arr[i] = WHITE;
      } else {
        arr[i] = BLUE;
      }
    }
    return arr;
  }
});

const RED = 'RED';
const WHITE = 'WHITE';
const BLUE = 'BLUE';

class DutchNationalFlag {
  swapCount = 0;
  colorCount = 0;
  redIndex;
  blueIndex;

  constructor(private a: string[]) {
    this.redIndex = -1;
    this.blueIndex = a.length;
  }

  public sort(): void {
    let i = 0;
    while (i < this.blueIndex) {
      const color = this._color(i);
      if (color === BLUE) {
        if (this.blueIndex - 1 === i) {
            return;
        }
        let _color = this._color(this.blueIndex - 1);
        while (_color === BLUE) {
            this.blueIndex--;
             if (this.blueIndex - 1 === i) {
               return;
             }
            _color = this._color(this.blueIndex - 1);
        }

        this._swap(i, --this.blueIndex);

        _color === RED && this._swapRed(i);
      } else {
        color === RED && this._swapRed(i);
      }
      i++;
    }
  }

  private _swapRed(i: number): void {
    if (this.redIndex + 1 < i) {
      this._swap(i, this.redIndex + 1);    
    } 
    this.redIndex++;
  }

  private _swap(i: number, j: number): void {
    const temp = this.a[i];
    this.a[i] = this.a[j];
    this.a[j] = temp;
    this.swapCount++;
  }

  private _color(i: number): string {
    this.colorCount++;
    return this.a[i];
  }
}
