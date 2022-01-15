/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const visited = new Array(arr.length).fill(false);
    const idxValMap = getValIndexMap(arr);
    return findMinJumps(arr, visited, 0, idxValMap);
};


function getValIndexMap(arr){
    const idxValMap = {};
    for(let idx=0; idx < arr.length; idx++){
        const val = arr[idx];
        if(!(val in idxValMap)) idxValMap[val] = [];
        idxValMap[val].push(idx);
    }
    return idxValMap;
}

function findMinJumps(arr, visited, idx, idxValMap){
    let minJumps = 0;
    const queue = new Queue([0]);
    let lastNode = arr.length - 1;
    while(!queue.isEmpty()){
        for(let size=queue.size(); size > 0; size--){
            const nextIdx = queue.dequeue();
            visited[nextIdx] = true;
            if(nextIdx === lastNode) return minJumps;
            const val = arr[nextIdx];
            const otherIndicesWithSameValue = idxValMap[val];
            for(let otherIdx of otherIndicesWithSameValue){
                if(!visited[otherIdx]) queue.enqueue(otherIdx);
            }
            if((nextIdx - 1) >=0 && !visited[nextIdx-1]) queue.enqueue(nextIdx - 1);
            if((nextIdx+1) < arr.length && !visited[nextIdx+1]) queue.enqueue(nextIdx + 1);
            idxValMap[val] = [];
        }
        minJumps++;
    }
    return minJumps;
    
}