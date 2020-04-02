# STACK

A **Stack** is an abstract data type that serves as a collection of elements, it has two operations:

* **Push:** add an element to the collection
* **Pop:** take and remove the most recently added element.

## Applications

* Compilers/Run time environments, which use it to store recursive calls.
* Tree Traversals
* Reverse things
* Undo/Redo operations <br />
...

## Implementation

Stack is implemened using:

* Array / Dynamic Array
  * **Drawback**: have to resize when the number elements added goes beyond the size allocated. can be waste of memory spave as allocate more than needed. 
  * Not efficient for the huge number of elements
* [Singly Linked List](../linked-list/singly-linked-list.ts)
  * **Drawback**: occupy more memory, slower than the array based stack
