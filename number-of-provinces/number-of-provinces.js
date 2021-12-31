/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const parents = new Array(isConnected.length).fill(-1);
    for(let i=0; i<isConnected.length;i++){
        for(let j=0; j<isConnected.length; j++){
            if(isConnected[i][j] === 1 && i !== j){
                union(parents, i, j);
            }
        }
    }
    let provinces = 0;
    for(let i=0; i < parents.length; i++){
        if(parents[i] === -1) provinces++;
    }
    return provinces;
    
};

function union(parents, x, y){
    const xset = find(parents, x);
    const yset = find(parents, y);
    if(xset !== yset) {
        parents[xset] = yset; 
    }
}

function find(parents, node){
    if(parents[node] === -1){
        return node;
    }
    return find(parents, parents[node]);
}