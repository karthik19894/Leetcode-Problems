/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adjList = new Array(n).fill(0).map(()=> new Array());
    const source = k - 1;
    for(let [from, to, time] of times){
        adjList[from - 1].push([to-1, time]);
    }
    const distances = new Array(n).fill(Infinity);
    distances[source] = 0;
    const minHeap = new MinHeap([], (elIdx, otIdx, heap)=>{
       return distances[heap[elIdx]] < distances[heap[otIdx]];
    });
    minHeap.insert(source);
    while(minHeap.isNotEmpty()){
       const vertex = minHeap.remove();
       const connectedVertices = adjList[vertex]; 
       for(let [nextVertex, time] of connectedVertices){
           if(distances[nextVertex] > distances[vertex] + time){
               distances[nextVertex] = distances[vertex] + time;
               minHeap.insert(nextVertex);
           }
       } 
    }
    let minTimeTaken = -Infinity;
    for(let i=0; i < n; i++){
        minTimeTaken = Math.max(minTimeTaken, distances[i]);
    }
    return minTimeTaken === Infinity ? -1 : minTimeTaken;
};

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array, compare) {
    this.heap = this.buildHeap(array);
    this.compare = compare;
  }

  buildHeap(array) {
    // Write your code here.
		const firstParentIdx = Math.floor((array.length - 2) / 2);
		for(let currentIdx = firstParentIdx; currentIdx >=0; currentIdx--){
			this.siftDown(currentIdx, array.length - 1, array);
		}
		return array;
  }

  siftDown(current, endIdx, heap) {
    // Write your code here.
		let currentIdx = current;
		let childIdxOne = this.getChildIdx(currentIdx);
		let lastIdx = endIdx
		while(childIdxOne <= lastIdx){
			let childTwoIdx = childIdxOne + 1 <= lastIdx ? childIdxOne + 1 : -1;
			let idxToSwap = childIdxOne;
			if(childTwoIdx !== -1 && this.compare(childTwoIdx, childIdxOne, heap)){
				idxToSwap = childTwoIdx;
			}
			if(this.compare(idxToSwap, currentIdx, heap)){
				this.swap(currentIdx, idxToSwap, heap);
				currentIdx = idxToSwap;
				childIdxOne = this.getChildIdx(idxToSwap);
			}else{
				return;
			}
		}
		
  }
		
	getChildIdx(idx){
		return 2 * idx + 1;
	}
	
	getParentIdx(eleIdx){
		return Math.floor((eleIdx - 1) / 2);
	}

  siftUp(currentIdx, heap) {
    // Write your code here.
		let parentIdxOfElement = this.getParentIdx(currentIdx);
		while(currentIdx >= 0 && this.compare(currentIdx, parentIdxOfElement, heap)){
			this.swap(currentIdx, parentIdxOfElement, heap);
			currentIdx = parentIdxOfElement;
			parentIdxOfElement = this.getParentIdx(currentIdx);
		}
  }

  peek() {
    // Write your code here.
		return this.heap[0];
  }

  remove() {
    // Write your code here.
		if(this.heap.length > 0){
			this.swap(0,this.heap.length-1, this.heap);
			const elementToRemove = this.heap.pop();
			this.siftDown(0, this.heap.length - 1, this.heap);
			return elementToRemove;
		}else{
			return this.heap.pop();
		}
		
  }

  insert(value) {
    // Write your code here.
		this.heap.push(value);
		this.siftUp(this.heap.length-1, this.heap);
  }
    isNotEmpty(){
        return this.heap.length > 0;
    }
	// compare(elementIdx, otherIdx, heap){
	// 	return heap[elementIdx] < heap[otherIdx];
	// }
	
	swap(idx1, idx2, heap){
		const temp = heap[idx2];
		heap[idx2] = heap[idx1];
		heap[idx1] = temp;
	}
}
