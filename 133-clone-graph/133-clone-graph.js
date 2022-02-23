/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const clonedMap = {};
    return cloneGraphHelper(node, clonedMap);
};

function cloneGraphHelper(node, clonedMap){
    if(node === null) return null;
    if(node.val in clonedMap) return clonedMap[node.val];
    const clonedNode = new Node(node.val);
    clonedMap[node.val] = clonedNode;
    const clonedNeighbours = [];
    for(let neighbour of node.neighbors){
        const clonedNeighbour = cloneGraphHelper(neighbour, clonedMap);
        clonedNeighbours.push(clonedNeighbour);
    }
    clonedNode.neighbors = clonedNeighbours;
    return clonedNode;
}