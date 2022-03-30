/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function(grid) {
    const maxPQ = new MaxHeap((a,b, heap)=> heap[a].min > heap[b].min);
    const startCellAndMin = new CellAndMin([0,0], grid[0][0]);
    const lastRow = grid.length - 1, lastCol = grid[0].length - 1;
    const visited = new Array(grid.length).fill(0).map(()=> new Array(grid[0].length).fill(false));
    maxPQ.insert(startCellAndMin);
    while(!maxPQ.isEmpty()){
        const currentCellMin = maxPQ.remove();
        const {cell, min } = currentCellMin;
        const row = cell[0], col = cell[1];
        visited[row][col] = true;
        if(cell[0] === lastRow && cell[1] === lastCol) return min;
        const neighbours = getNeighbours(grid, cell[0], cell[1], visited);
        for(let [nextRow, nextCol] of neighbours){
            maxPQ.insert(new CellAndMin([nextRow, nextCol], Math.min(min, grid[nextRow][nextCol])));
        }
    }
    return -1;
};

function getNeighbours(grid, row, col, visited){
    const directions = [
        [-1, 0], [0, 1],[1, 0],[0, -1]
    ];
    const neighbours = [];
    for(let dir of directions){
        const [nextRow, nextCol] = [row+dir[0],col+dir[1]]
        if(nextRow < 0 || nextRow >= grid.length 
           || nextCol < 0 || nextCol >= grid[nextRow].length
          || visited[nextRow][nextCol]) continue;
        neighbours.push([nextRow, nextCol]);
    }
    return neighbours;
}

class CellAndMin {
    constructor(cell, min){
        this.cell = cell;
        this.min = min;
    }
}

class MaxHeap {
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
      if (childIdxTwo !== -1 && this.compare(childIdxTwo, childIdxOne, this.heap)) {
        toSwap = childIdxTwo;
      }
      if (this.compare(toSwap, currentIdx, this.heap)) {
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
    while (parentIdx >= 0 && this.compare(currentIdx, parentIdx, this.heap)) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
}