/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adjList = new Array(n).fill(0).map(()=> new Array());
    for(let timeDetails of times){
        const [source, target, time] = timeDetails;
        adjList[source - 1].push([target - 1, time]);
    }
    const distances = new Array(n).fill(Infinity);
    distances[k - 1] = 0; // we will start at k
    const minHeap = new MinHeap((idxOne, idxTwo)=> {
        return distances[idxOne] < distances[idxTwo];
    });
    minHeap.insert(k - 1);
    while(!minHeap.isEmpty()){
        const node = minHeap.remove();
        const neighbours = adjList[node];
        for(let neighbour of neighbours){
            const [nodeIdx, time] = neighbour;
            if(distances[node] + time < distances[nodeIdx]){
                distances[nodeIdx] = distances[node] + time;
                minHeap.insert(nodeIdx);
            }
        }
    }
    const maxOfMinDistances = Math.max(...distances);
    return maxOfMinDistances === Infinity ? -1 : maxOfMinDistances;
};

class MinHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
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