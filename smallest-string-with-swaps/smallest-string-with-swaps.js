/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const root = new Array(s.length).fill(0);
    for(let i=0; i < root.length; i++){
        root[i] = i;
    }
    for(let pair of pairs){
        const [n1, n2] = pair;
        union(root, n1, n2);
    }
    const rootGroupMap = new Map();
    for(let i=0; i < root.length; i++){
        let group = find(root, i);
        if(!rootGroupMap.has(group)){
            rootGroupMap.set(group, new MinHeap());
        }
        const minHeapOfCurrentIdx = rootGroupMap.get(group);
        minHeapOfCurrentIdx.insert(s[i]);
    }
    let smallestString = "";
    for(let i=0; i < root.length; i++){
        const minHeapOfCurrent = rootGroupMap.get(root[i]);
        smallestString += minHeapOfCurrent.remove();
    }
    return smallestString;
};

function find(root, node){
    if(root[node] === node) return node;
    return root[node] = find(root, root[node]);
}

function union(root, n1, n2){
    let root1 = find(root, n1);
    let root2 = find(root, n2);
    if(root1 === root2) return false;
    if(root1 < root2){
        root[root2] = root1;
    }else{
        root[root1] = root2;
    }
    return true;
}

class MinHeap {
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
    return this.heap[idxOne] < this.heap[idxTwo];
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