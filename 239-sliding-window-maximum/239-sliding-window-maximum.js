/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const maxQueue = new MaxQueue();
    const result = [];
    for(let i=0; i < nums.length; i++){
        maxQueue.enqueue(nums[i]);
        if(i >= k - 1){
            result.push(maxQueue.max());
            maxQueue.dequeue();
        }
    }
    return result;
};

class MaxQueue{
    constructor(){
        this.queue = new Queue();
        this.maxDeque = [];
    }
    
    enqueue(num){
        this.queue.enqueue(num);
        // we are popping off elements in maxDeque because whatever max that was already
        // there will be dequeued before our current element so our max will never be the 
        // elements before our current
        while(this.maxDeque.length && this.getLastInMaxDeque() < num){
            const removed = this.maxDeque.pop();
        }
        this.maxDeque.push(num);
    }
    
    dequeue(){
        const removedNum = this.queue.dequeue();
        if(this.getFirstInMaxDeque() === removedNum){
            this.maxDeque.shift();
        }
        return removedNum;
    }
    
    max(){
        return this.maxDeque[0] || null;
    }
    
    getFirstInMaxDeque(){
        return this.maxDeque[0];
    }
    
    getLastInMaxDeque(){
        const lastIdx = this.maxDeque.length - 1;
        return this.maxDeque[lastIdx];
    }
        
}