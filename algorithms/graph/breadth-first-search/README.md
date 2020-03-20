# 🔍 **BREADTH-FIRST Search**

> Breadth-first search allows you to find the shortest distance between two things.
> It can helps answer two types of questions:
>
> 1. Is there any path from node A to node B?
> 2. What is the shortest path from node A to node B?

`Keep in mind that: It is only true for no weighted graphs, For Weighted Graphs, check` [Dijkstra's](./dijkstra.md)

## **💡 Usage**

* a checker AI that calculates a fewest move to victory
* a spell checker (correct READE<font color="red">**D**</font> -> READER)
* Find the doctor closest to you in your network

![Way to the Golden Gate Bridge](./route.PNG "Way to the Golden Gate Bridge")

How the algorithm works?

1. Find all nodes which are directly connected to the node you are on, and put to a checking queue.
2. Loop through those nodes, for each node:

    * Check if the node matches the requirements. If it does then return it back and stop searching.
    * It it does not, mark it as checked and put all of its neighbouring nodes into the queue and continue...
    * Always follow FIFO to find the shortest path

## Running Time

= O(number of edges  + number of elements)

* Adding one element to a queue takes constant time O(1). => Adding N elements takes O(N)
* Search the entire network takes O(number of edges)

## Recap

* It tells you if there's a path from A to B
* If there's a path, it will find the shortest path
* If need to find the shortest path, need to model the problem as a graph, and use BFS to solve
* You need to check elements in the order they were added to the search list, so the search list
  needs to be a queue. Otherwise, you won't get the shortest path.
* Make sure do not check an element twice -> otherwise, infinite loop
