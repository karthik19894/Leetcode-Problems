/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap(stones);
    while(maxHeap.size() > 1){
        const y = maxHeap.remove();
        const x = maxHeap.remove();
        if(x !== y){
            const newStone = y - x;
            maxHeap.insert(newStone);
        }
    }
    if(maxHeap.size() === 1) return maxHeap.remove();
    return 0;
    
};

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
		const firstParentIdx = Math.floor((array.length - 2) / 2);
		for(let currentIdx = firstParentIdx; currentIdx >=0; currentIdx--){
			this.siftDown(currentIdx, array.length - 1, array);
		}
		return array;
  }
  
  size(){
      return this.heap.length;
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
	compare(elementIdx, otherIdx, heap){
		return heap[elementIdx] > heap[otherIdx];
	}
	
	swap(idx1, idx2, heap){
		const temp = heap[idx2];
		heap[idx2] = heap[idx1];
		heap[idx1] = temp;
	}
}
