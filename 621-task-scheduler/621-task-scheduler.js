/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let time = 0;
  // TODO: Write your code here
  const freqCounter = {};
  for(let task of tasks){
    if(!(task in freqCounter)) freqCounter[task] = 0;
    freqCounter[task] += 1;
  }
  const maxHeap = new MaxPriorityQueue({ priority: (task)=> task.count});
  const allTasks = Object.keys(freqCounter);
  for(let task of allTasks){
    maxHeap.enqueue({ task: task, count: freqCounter[task] });
  }
  const tasksInQue = new Queue();
  while(maxHeap.size() || tasksInQue.size()){
    time += 1;
    if(maxHeap.size()){
      const {element : taskToComplete} = maxHeap.dequeue();
      if(taskToComplete.count > 1){
        tasksInQue.enqueue({ task: taskToComplete.task, 
                         count: taskToComplete.count - 1, 
                         nextAvailable: time + n });
      }
    }
    if(tasksInQue.size() && tasksInQue.front().nextAvailable === time){
      const element = tasksInQue.dequeue();
      maxHeap.enqueue(element);
    }
  }
  return time;
};