# LINKED LIST

[Compare Array and LinkedList](https://medium.com/@mckenziefiege/arrays-linked-lists-and-big-o-notation-486727b6259b)

A linked list is a linear data structure where each element is a separate object. It means linear order is not given by their physical placement in the memory.

Each element  (node) is comprising of two items - the data and the reference to the next node. The last node has a reference to `null`. The entry point into a linked list is called the head of the list. Head is not a seperate node but holds the reference to the first node. If the list is empty the head is a null reference.

---

**Advantages**: 
* This structure allows for efficient insertion or removal elements from any position in the sequence during iteration.

**Drawbacks**: 
* Access time is linear. Fast access is not feasible. 
* Arrays have [better cache locality](https://stackoverflow.com/questions/12065774/why-does-cache-locality-matter-for-array-performance) as compared to linked lists.
  



---

## Resources

https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists <- many gems can be found in this.
