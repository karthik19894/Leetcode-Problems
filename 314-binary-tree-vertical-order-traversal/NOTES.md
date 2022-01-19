if we are doing it through dfs then we need to keep track of the row number for each of the nodes in order to match the exact ordering that is expected, so if we use bfs then we can get just use the column no for ordering.
​
We can remove the sorting by calculating the min and max hd lines, and then populating all the hd line values from min to max.