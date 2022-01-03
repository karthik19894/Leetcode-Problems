/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let count = 0;
    const parent = new Array(n).fill(-1);
    for(let [from, to] of edges){
        union(parent, from, to);
    }
    for(let i=0; i < parent.length; i++){
        if(parent[i] === -1) count++;
    }
    return count;
};

function find(parent, node){
    if(parent[node] === -1) return node;
    return parent[node] = find(parent, parent[node]);
}

function union(parent, n1, n2){
    let parent1 = find(parent, n1);
    let parent2 = find(parent, n2);
    if(parent1 === parent2){
        return false;
    }
    parent[parent2] = parent1;
    return true;
}