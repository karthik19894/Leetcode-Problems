/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    const maxHeapOfEvens = new MaxHeap();
    let minimum = Infinity;
    let minimumDeviation = Infinity;
    for(let num of nums){
        if((num % 2) === 0){
            maxHeapOfEvens.insert(num);
            minimum = Math.min(minimum, num);
        }else{
            let numAsEven = num * 2;
            minimum = Math.min(minimum, numAsEven);
            maxHeapOfEvens.insert(numAsEven);
        }
    }
    
    while(!maxHeapOfEvens.isEmpty()){
        const nextMaxNum = maxHeapOfEvens.remove();
        const newDeviation = nextMaxNum - minimum;
        minimumDeviation = Math.min(minimumDeviation, newDeviation);
        if((nextMaxNum % 2) === 0){
            minimum = Math.min(minimum, nextMaxNum / 2);
            maxHeapOfEvens.insert(nextMaxNum / 2);
        }else{
            break;
        }
    }
    return minimumDeviation;
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(element) {
    this.heap.push(element);
    this.siftUp();
  }
  remove() {
    if (this.heap.length === 0) return;
    this.swap(0, this.heap.length - 1);
    const removedElement = this.heap.pop();
    this.siftDown();
    return removedElement;
  }
  swap(idx, otherIdx) {
    const temp = this.heap[idx];
    this.heap[idx] = this.heap[otherIdx];
    this.heap[otherIdx] = temp;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  compare(idxOne, idxTwo) {
    return this.heap[idxOne] > this.heap[idxTwo];
  }
  siftDown() {
    let currentIdx = 0;
    let childIdxOne = 2 * currentIdx + 1;
    while (childIdxOne < this.heap.length) {
      let childIdxTwo = -1;
      childIdxTwo = childIdxOne + 1 < this.heap.length ? childIdxOne + 1 : -1;
      let toSwap = childIdxOne;
      if (childIdxTwo !== -1 && this.compare(childIdxTwo, childIdxOne)) {
        toSwap = childIdxTwo;
      }
      if (this.compare(toSwap, currentIdx)) {
        this.swap(currentIdx, toSwap);
        currentIdx = toSwap;
        childIdxOne = 2 * currentIdx + 1;
      } else {
        break;
      }
    }
  }
  siftUp() {
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (parentIdx >= 0 && this.compare(currentIdx, parentIdx)) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
}