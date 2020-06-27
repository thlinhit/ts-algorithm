import { Quicksort } from './quick-sort';
import { Comparator } from './../../../util/comparator';
import { isCorrectOrder, generateRandomNumberArr } from '../../../util/helper.util';

describe('Quicksort', () => {
  test('TestCase 1: should work', () => {
    const arr: number[] = generateRandomNumberArr(100);

    const numberComparator: Comparator<number> = Comparator.create((a1: number, a2: number) => {
      if (a1 == a2) return 0;
      else if (a1 < a2) return -1;
      else return 1;
    });

    Quicksort.sort(arr, numberComparator);

    expect(isCorrectOrder(arr, numberComparator));
  });

  test('TestCase 2: should work', () => {
    type Person = {
      name: string;
      age: number;
    };

    const arr: Person[] = [
      { name: 'Linh', age: 16 },
      { name: 'An', age: 15 },
      { name: 'Duc', age: 12 },
      { name: 'Nhi', age: 40 },
      { name: 'Baby', age: 1 },
      { name: 'Duc2', age: 12 },
    ];

    const ageComparator: Comparator<Person> = Comparator.create((p1: Person, p2: Person) => {
      if (p1.age == p2.age) return 0;
      else if (p1.age < p2.age) return -1;
      else return 1;
    });

    Quicksort.sort(arr, ageComparator);

    expect(isCorrectOrder(arr, ageComparator));

    // expect(arr).toEqual([
    //   { name: 'Baby', age: 1 },
    //   { name: 'Duc', age: 12 },
    // { name: 'Duc2', age: 12 },
    //   // Quicksort will fails randomly if there are two people having the same age
    //   // Because it is not stable.
    //   { name: 'An', age: 15 },
    //   { name: 'Linh', age: 16 },

    //   { name: 'Nhi', age: 40 },
    // ]);
  });
});
