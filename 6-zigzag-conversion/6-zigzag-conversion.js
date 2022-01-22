/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1) return s;
    const lastRow = numRows - 1;
    const resultMatrix = new Array(numRows).fill(0).map(()=> new Array());
    let isGoingDown = true;
    let idx = 0;
    let rowNum = 0;
    while(idx < s.length){
        let char = s[idx];
        let rowOfChar = resultMatrix[rowNum];
        rowOfChar.push(char);
        if(rowNum === lastRow || (idx > 0 && rowNum === 0)){
            isGoingDown = !isGoingDown;
        }
       rowNum += isGoingDown ? 1 : -1;
       idx+=1; 
    }
    return getStringFromMatrix(resultMatrix);
};

function getStringFromMatrix(matrix){
    let str = "";
    for(let row=0; row < matrix.length; row++){
        for(let col=0; col < matrix[row].length; col++){
            str += matrix[row][col];
        }
    }
    return str;
}