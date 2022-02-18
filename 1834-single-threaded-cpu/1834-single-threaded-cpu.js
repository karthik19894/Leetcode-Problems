/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    const allTasks = tasks.map((task, index) => new Task(task[0], task[1], index));
    const taskSortOrderFunction = (idx1, idx2, heap)=>{
      let diff = 0;
      const task1 = heap[idx1], task2 = heap[idx2];
      if(task1.processingTime === task2.processingTime){
           diff = task1.index - task2.index;
       }else{
           diff = task1.processingTime - task2.processingTime;
       }
       return diff < 0; 
    };
    const taskQueue = new MinHeap(taskSortOrderFunction);
    const availableTasksQueue = new MinHeap((a,b, heap)=> {
        const task1 = heap[a], task2 = heap[b];
        return task1.enqueueTime - task2.enqueueTime < 0;
    });
    const queue = new Queue();
    allTasks.forEach(task => { availableTasksQueue.insert(task); });
    const tasksInOrder = [];
    let currentTime = availableTasksQueue.peek().enqueueTime;
    while(!availableTasksQueue.isEmpty() || !taskQueue.isEmpty()){
        while(!availableTasksQueue.isEmpty() && availableTasksQueue.peek().enqueueTime <= currentTime){
            let nextAvailableTask = availableTasksQueue.remove();
            taskQueue.insert(nextAvailableTask);
        }
        if(!taskQueue.isEmpty()){
            let nextTaskWithLessProcessingTime = taskQueue.remove();
            currentTime = currentTime + nextTaskWithLessProcessingTime.processingTime;
            tasksInOrder.push(nextTaskWithLessProcessingTime.index);
        }else{
            currentTime = availableTasksQueue.peek().enqueueTime;
        }
    }
    return tasksInOrder;
};


class Task {
    constructor(enqueTime, processingTime, index){
        this.enqueueTime = enqueTime;
        this.processingTime = processingTime;
        this.index = index;
    }
}

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
    peek(){
        return this.heap[0];
    }
}