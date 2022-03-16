/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let pushPtr = 0, popPtr = 0;
    while(pushPtr < pushed.length && popPtr < popped.length){
        const elPushed = pushed[pushPtr];
        stack.push(elPushed);
        while(stack.length && popped[popPtr] === top(stack)){
            stack.pop();
            popPtr++;
        }
        pushPtr++;
    }
    while(popPtr < popped.length){
        let nextPop = popped[popPtr];
        let actualPopped = stack.pop();
        if(nextPop !== actualPopped) return false;
        popPtr++;
    }
    return stack.length === 0;
};

function top(stack){
    return stack[stack.length - 1];
}