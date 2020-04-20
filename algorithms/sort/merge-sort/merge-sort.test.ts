import { Mergesort } from './merge-sort';

describe('Mergesort', () => {
  test('should work', () => {
    const arr: number[] = [5, 4, 1, 7, 9, 10, 2, 3];

    Mergesort.sort(arr, (a1: number, a2: number) => {
      if (a1 == a2) return 0;
      else if (a1 < a2) return -1;
      else return 1;
    });

    expect(arr).toEqual([1, 2, 3, 4, 5, 7, 9, 10]);
  });

  test('should keep the order of the same keys', () => {
    type Person = {
      name: string;
      age: number;
    };

    const arr: Person[] = [
      { name: 'Linh', age: 15 },
      { name: 'An', age: 15 },
      { name: 'Duc', age: 12 },
      { name: 'Nhi', age: 40 },
      { name: 'Baby', age: 1 },
    ];

    Mergesort.sort(arr, (p1: Person, p2: Person) => {
      if (p1.age == p2.age) return 0;
      else if (p1.age < p2.age) return -1;
      else return 1;
    });

     expect(arr).toEqual([
       { name: 'Baby', age: 1 },
       { name: 'Duc', age: 12 },
       { name: 'Linh', age: 15 },
       { name: 'An', age: 15 },
       { name: 'Nhi', age: 40 }
     ]);
  });
});