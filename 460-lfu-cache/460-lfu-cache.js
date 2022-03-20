/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.cache = {};
    this.freqCounter = {};
    this.freqGroup = { 1 : []};
    this.leastFrequency = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!(key in this.cache)) return -1;
    this.updateFrequency(key);
    return this.cache[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity <= 0) return;
    if(!(key in this.cache)){
        const isCacheFull = this.currentSize === this.capacity;
        if(isCacheFull){
            this.evictFromCache();
        }
        this.cache[key] = value;
        this.freqCounter[key] = 1;
        this.freqGroup[1].unshift(key);
        this.leastFrequency = 1;
        this.currentSize += 1;
    } else{
        this.cache[key] = value;
        this.updateFrequency(key);
    }
    
};

LFUCache.prototype.updateFrequency = function(key){
    const currentFrequency = this.freqCounter[key];
    this.freqCounter[key] += 1;
    this.shiftFrequency(currentFrequency, currentFrequency + 1, key);
}

LFUCache.prototype.evictFromCache = function(key) {
    const {leastFrequency} = this;
    const elementsWithLeastFrequency = this.freqGroup[leastFrequency];
    const evictedKey = elementsWithLeastFrequency.pop();
    if(elementsWithLeastFrequency.length === 0) this.leastFrequency = leastFrequency - 1;
    delete this.freqCounter[evictedKey];
    delete this.cache[evictedKey];
    this.currentSize -= 1;
};

LFUCache.prototype.shiftFrequency = function(fromFreq, toFreq, key){
    const {freqGroup} = this;
    const keyIdx = freqGroup[fromFreq].indexOf(key);
    freqGroup[fromFreq].splice(keyIdx, 1);
    if(fromFreq === this.leastFrequency && freqGroup[fromFreq].length === 0) this.leastFrequency = this.leastFrequency + 1;
    if(!(toFreq in freqGroup)) freqGroup[toFreq] = [];
    freqGroup[toFreq].unshift(key);
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */