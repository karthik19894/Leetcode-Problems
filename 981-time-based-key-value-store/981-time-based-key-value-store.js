
var TimeMap = function() {
    this.keyMap = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!(key in this.keyMap)) this.keyMap[key] = [];
    this.keyMap[key].push({value:value, timestamp:timestamp});
}

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!(key in this.keyMap)) return "";
    let arr = this.keyMap[key];
    let left = 0, right = arr.length - 1;
    let ans = "";
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid].timestamp === timestamp) return arr[mid].value;
        else if(arr[mid].timestamp < timestamp){
            ans = arr[mid].value;
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */