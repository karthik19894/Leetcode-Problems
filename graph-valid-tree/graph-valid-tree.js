/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(edges.length !== n-1) return false;
    const disjointSet = new DisjointSet(n);
    for(let edge of edges){
        const [n1, n2] = edge;
        if(!disjointSet.union(n1, n2)) return false;
    }
    return true;
};


class DisjointSet {
    constructor(size){
        this.parent = new Array(size).fill(-1);
        for(let i=0; i < size; i++){
            this.parent[i] = i;
        }
        this.sizes = new Array(size).fill(1);
    }
    
    find(node){
        if(this.parent[node] === node) return node;
        return this.parent[node] = this.find(this.parent[node]);
    }
    
    union(n1, n2){
        let root1 = this.find(n1);
        let root2 = this.find(n2);
        if(root1 === root2){
            return false;
        }
        if(this.sizes[root1] >= this.sizes[root2]){
            this.parent[root2] = root1;
            this.sizes[root1] += this.sizes[root2];
        }else{
            this.parent[root1] = root2;
            this.sizes[root2] += this.sizes[root1];
        }
        return true;
    }
}