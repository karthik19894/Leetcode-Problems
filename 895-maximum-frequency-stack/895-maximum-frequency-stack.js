
var FreqStack = function() {
    this.maxFrequency = 0;
    this.freqCounter = {};
    this.freqGroup = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if(!(val in this.freqCounter)) this.freqCounter[val] = 0;
    this.freqCounter[val]++;
    const currentFreq = this.freqCounter[val];
    if(currentFreq > this.maxFrequency){
        this.maxFrequency = currentFreq;
    }
    if(!(currentFreq in this.freqGroup)) this.freqGroup[currentFreq] = [];
    this.freqGroup[currentFreq].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const maxFreq = this.maxFrequency;
    const valToReturn = this.freqGroup[maxFreq].pop();
    this.freqCounter[valToReturn] -= 1;
    if(this.freqGroup[maxFreq].length === 0){
        this.maxFrequency -= 1;
    }
    return valToReturn;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */