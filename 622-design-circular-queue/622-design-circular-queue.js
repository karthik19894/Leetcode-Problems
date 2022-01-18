/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.currentSize = 0;
    this.head = 0;
    this.queue = new Array(k);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    let newIdx = (this.head + this.currentSize) % this.size;
    this.queue[newIdx] = value;
    this.currentSize += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.queue[this.head] = null;
    this.currentSize -= 1;
    this.head = (this.head + 1) % this.size;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.currentSize > 0){
        return this.queue[this.head];
    }
    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.currentSize > 0){
        return this.queue[(this.head + this.currentSize - 1) % this.size];
    }
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */