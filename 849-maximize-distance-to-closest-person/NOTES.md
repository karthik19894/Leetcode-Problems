so the naive approach is to look for seats that are not occupied expanding both left and right from each of the idx and calculate the max distance.
​
So the time complexity of this would be O(N^2), which we can optimize by using two arrays left and right that precalculates the distance between the current idx and idx with seat occupied. which makes it O(2N), since we would need two passes at least.
​
Now if we notice closely, the problem is only asking for the max distance so, if we know the distance between two occupied seats, then all the seats that are between will contribute to our answer, now since we are calculating the distance between two occupied seats, the distance should be halved by 2 because the occupied seats are considered here for the distance. Now this will make it O(N)