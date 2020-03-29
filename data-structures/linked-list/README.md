# Singly Linked List


A linked list is a linear data structure where each element is a separate object. It means linear order is not given by their physical placement in the memory.

Each element  (node) is comprising of two items - the data and the reference to the next node. The last node has a reference to `null`. The entry point into a linked list is called the head of the list. Head is not a seperate node but holds the reference to the first node. If the list is empty the head is a null reference.

# Doubly Linked List

In the doubly linked list, a node will hold one more reference which links to its previous node.


### Compare 

|  Key |  Array  | Singly Linked List  | Singly Linked List + `tail` | Doubly Linked List | Doubly Linked List + `tail` |
|---|---|---|---|---|---|
| accessing the specific element  |  $`O(1)`$  | $`O(n)`$ | $`O(n)`$ |  $`O(n)`$ |  $`O(n)`$ |
| insert/remove element at the front | $`O(n)`$ - expensive  |  $`O(1)`$ | $`O(1)`$  | $`O(1)`$  | $`O(1)`$  |
| insert/remove element at the end  | $`O(1)`$ + Amortized Time  | $`O(n)`$  | $`O(1)`$  | $`O(n)`$  | $`O(1)`$  |
| insert/remove element in the middle (before or after the specific element)  | $`O(n)`$ - expensive | $`O(n)`$ | $`O(n)`$ | $`O(1)`$ | $`O(1)`$ |
| [cache locality](https://stackoverflow.com/questions/12065774/why-does-cache-locality-matter-for-array-performance)  | Yes | N/A | N/A | N/A | N/A |
| Two Way Traversal  | Yes | N/A | N/A | Yes | Yes |
| Usage | **instance access, not good for replace, delete, insert** | **insert/delete at the front - `Stack` implementation** | insert/delete at the front, and insert at the end | insert/delete at the front and the middle, insert at the end | **best when you do lots of inserting, deleting, replacing - implement - implement `Heaps` & `Binary Tree` ...** |


## Resources

https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists <- many gems can be found in this.
