/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a,b)=> a[0] - b[0]);
    const disjointSet = new DisjointSet(n);
    let components = n;
    for(let [time, node1, node2] of logs){
        if(disjointSet.union(node1, node2)){
            components--;
        }
        if(components === 1) return time;
    }
    return -1;
};

class DisjointSet {
    constructor(n){
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);
    }
    
    find(node){
        if(this.parent[node] === -1){
            return node;
        }
        return this.parent[node] = this.find(this.parent[node]);
    }
    
    union(node1, node2){
        let parent1 = this.find(node1);
        let parent2 = this.find(node2);
        if(parent1 === parent2){
            return false;
        }
        if(this.rank[parent1] >= this.rank[parent2]){
            this.parent[parent2] = parent1;
            this.rank[parent1] += 1;
        }else{
            this.parent[parent1] = parent2;
            this.rank[parent2] += 1;
        }
        return true;
    }
}