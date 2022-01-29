/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    /* so we can solve this problem brute forcely by expanding left and right from each of the indices
     and then calculating the maxArea.
     
     So to solve this optimally in O(n) time and O(n) space, we can use a stack.
     Reason being stack can be used to keep track of last in and we can also peek at the top of stack.
     
     In this problem we know a height is considered for area when the heights are continuously increasing
     and whenever we find a height that is lesser than the current height then we know that we can no
     longer use this height, so we calculate the area uptil this point and pop it of the stack
    */
    const stack = [];
	let maxArea = 0;
	for(let i=0; i <= heights.length; i++){
        let currentHeight = i < heights.length ? heights[i] : 0;
        while(stack.length && heights[top(stack)] > currentHeight){
            // now at current idx the heights started decreasing
            let lastHeight = heights[stack.pop()];
            let idxUptilLastHeight = i;
            let width = stack.length ? idxUptilLastHeight - top(stack) - 1 : idxUptilLastHeight;
            let area = lastHeight * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
    }
  return maxArea;
    
};

function top(stack){
	return stack[stack.length - 1];
}