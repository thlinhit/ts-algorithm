# GREEDY

- Use to tackle the impossible problems that have no fast algorithmic solution (NP-complete).
- Using **approximation** algorithms to find **approximate** solution to an NP-problem quickly.

## Definition

A greedy algorithm is that: at each step, pick the optimal move. Generally, `at each step you pick the locally optimal solution`

> 💡 Greedy algorithms don't always work. But they're simple to write. Sometimes, perfect is the enemy of good. Sometimes all you need is an algorithm that solves the problem pretty well. And that’s where greedy algorithms shine, because they’re simple to write and usually get pretty close.

## Some Algorithms

- [Breath First Search](../graph/breadth-first-search/README.md)
- [Diijkstra's](../graph/dijkstra/README.md)
- Set-covering
- Travelling saleperson
- Job Sequencing
- Activity Scheduling
- Minimum Spanning tree  
  ...

## NP-complete problems

### Definition

- NP-complete problems have no known fast solution.
- Solved by using an approximation algotithm.

### How to determine if the problem is NP-complete

- Your algorithm run quickly with a handful of items but quickly slows down with more items.
- `All combinations of X` usually point to an NP-complete problem.
- Do you have to calculate "every possible versions" of X? Might be NP-complete.
- If your problem involves a sequence (such as a sequence of cities, like travelling saleperson) -> it's hard to solve, might be NP-complete
- If your problem involves a set (like a set of radio stations) and it’s hard to solve, it might be NP-complete.

## Open points

- **[Quick Sort](../sort/quick-sort/README.md) could be considered as greedy algorithms?**
  - NO. It is classified as conquer and divide. It can break down the problems into sub problems.
