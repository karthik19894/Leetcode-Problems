/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dirX = 0, dirY = 1; // initially the robot will be moving north which will make changes to y axis
    let x=0, y = 0;
    for(let instr of instructions){
        if(instr === "G"){
            [x , y] = [x+dirX, y + dirY];
        }else if(instr === "L"){
            [dirX, dirY] = [-1 * dirY, dirX]; // if we move left then we can end up in negative axis of y
        }else{
            [dirX, dirY] = [dirY, -1 * dirX]; // if we move right then we can end up in negative axis of x
        }
    }
    let isBackToOrigin = x === 0 && y === 0;
    let hasChangedDirection = dirX !== 0 || dirY !== 1;
    return isBackToOrigin || hasChangedDirection;
};