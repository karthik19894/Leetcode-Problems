/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let actualColor = image[sr][sc];
    const que = [];
    const directions = [
        [-1,0],[0,1],[1,0],[0,-1]
    ];
    que.push([sr, sc]);
    while(que.length){
        const [row, col] = que.shift();
        image[row][col] = newColor;
        for(let direction of directions){
            const [nextRow, nextCol] = [row+direction[0], col+direction[1]];
            if(nextRow < 0 || nextRow >= image.length || nextCol < 0 || nextCol >= image[0].length) continue;
            if(image[nextRow][nextCol] === actualColor && image[nextRow][nextCol] !== newColor){
                que.push([nextRow,nextCol]);
            }
        }
    }
    return image;
};