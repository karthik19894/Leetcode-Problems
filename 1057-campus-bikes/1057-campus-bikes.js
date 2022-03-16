/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    const output = new Array(workers.length).fill(null);
    const usedBikeIndices = new Set();
    const allPairs = [];
    for(let workerIdx=0; workerIdx < workers.length; workerIdx++){
        for(let bikeIdx=0; bikeIdx < bikes.length; bikeIdx++){
            const distance = findDistance(workers[workerIdx], bikes[bikeIdx]);
            allPairs.push(new WorkerBike(workerIdx, bikeIdx, distance)); 
        }
    }
    allPairs.sort(compare);
    let noOfWorkers = workers.length;
    for(let pair of allPairs){
        const {workerIdx, bikeIdx} = pair;
        if(usedBikeIndices.has(bikeIdx) || output[workerIdx] !== null) continue;
        usedBikeIndices.add(bikeIdx);
        output[workerIdx] = bikeIdx;
        noOfWorkers--;
        if(noOfWorkers === 0) break;
    }
    return output;
};

function compare(a, b){
    if(a.distance !== b.distance) return a.distance - b.distance;
    else if(a.workerIdx !== b.workerIdx) return a.workerIdx - b.workerIdx;
    else return a.bikeIdx - b.bikeIdx;
}


function findDistance(worker, bike){
    return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
}

class WorkerBike {
    constructor(workerIdx, bikeIdx, distance){
        this.workerIdx = workerIdx;
        this.bikeIdx = bikeIdx;
        this.distance = distance;
    }
}