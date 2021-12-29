/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const pointsMaxHeap = new MaxHeap();
    for(let point of points){
        pointsMaxHeap.insert(point);
        if(pointsMaxHeap.size() > k){
            pointsMaxHeap.remove();
        }
    }
    // now the max heap will have only the k minimum points
    return pointsMaxHeap.getList();
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
    return this.distance(this.heap[idxOne]) > this.distance(this.heap[idxTwo]);
  }
  distance(point){
      const [x,y] = point;
      return Math.sqrt(x*x + y*y);
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
  size(){
      return this.heap.length;
  }
  getList(){
      return this.heap;
  }  
}