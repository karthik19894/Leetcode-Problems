So to solve this problem bruteforcely we can use recursion and try to find the minimum out of all paths while keeping track of visited to avoid going back.
​
However recursive solution will result in TLE.
​
So we would think of memoizing the results, but memoization will not work, because when we memoize only on idx values, there can be more than one minimum jumps ans at each idx depending on the path traversed before the node, so memoization will not give the correct answer.
​
So we can look at this problem as a graph where we start at node 0 and we have to reach node n-1 where each of the nodes it can traverse are the possible indices it can jump to, now BFS will  give the minimum jumps when we are at node n - 1, as BFS will always find the shortest path to the node.