/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a,b) => a[0] - b[0]);
    const disjointSet = new DisjointSet(n);
    let components = n;
    for(let i=0; i < logs.length; i++){
        const [timestamp, node1, node2] = logs[i];
        if(disjointSet.union(node1, node2)){
            components--;
            if(components === 1){
                return timestamp;
            }
        }
    }
    return -1;
};

class DisjointSet {
    constructor(n){
        this.parent = new Array(n).fill(0);
        this.size = new Array(n).fill(1);
        for(let i=0; i<n;i++){
            this.parent[i]=i;
        }
    }
    find(node){
        if(this.parent[node] === node) return node;
        return this.parent[node] = this.find(this.parent[node]);
    }
    union(n1, n2){
        let parent1 = this.find(n1);
        let parent2 = this.find(n2);
        if(parent1 === parent2) return false;
        if(this.size[parent1] >= this.size[parent2]){
            this.parent[parent2] = parent1;
            this.size[parent1] += this.size[parent2];
        }else{
            this.parent[parent1] = parent2;
            this.size[parent2] += this.size[parent1];
        }
        return true;
    }
}