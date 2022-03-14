/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const dirs = path.split("/");
    const stack = [];
    for(let dir of dirs){
        if(dir === "." || dir === ""){
            continue;
        }else if(dir === ".."){
            stack.pop()
        }else {
            stack.push(dir);
        }
    }
    return "/" + stack.join("/");
};