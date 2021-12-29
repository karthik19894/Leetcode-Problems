
var Leaderboard = function() {
    this.playersMap = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(this.playersMap.has(playerId)){
        const lastScore = this.playersMap.get(playerId);
        this.playersMap.set(playerId, lastScore + score);
        return;
    }
    this.playersMap.set(playerId, score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const scoresMinHeap = new MinHeap();
    for(let [playerId, score] of this.playersMap){
        scoresMinHeap.insert(score);
        if(scoresMinHeap.size() > K){
            scoresMinHeap.remove();
        }
    }
    let total = 0;
    // now the min heap will have the highest K scores
    while(!scoresMinHeap.isEmpty()){
        total += scoresMinHeap.remove();
    }
    return total;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.playersMap.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
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
  size(){
      return this.heap.length;
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