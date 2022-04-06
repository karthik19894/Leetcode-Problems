/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    arr.sort((a,b)=> a - b);
    let mod = Math.pow(10, 9) + 7;
    let count = 0;
    for(let i=0; i < arr.length; i++){
        let first = arr[i];
        let left = i + 1;
        let right = arr.length - 1;
        let toSum = target - first;
        while(left < right){
            if(arr[left] + arr[right] < toSum){
                left++;
            }else if(arr[left] + arr[right] > toSum){
                right--;
            }else if(arr[left] !== arr[right]){
                let leftCount = 1, rightCount = 1;
                while(left < right && arr[left] === arr[left+1]){
                    leftCount++;
                    left++;
                }
                while(left < right && arr[right] === arr[right - 1]){
                    rightCount++;
                    right--;
                }
                count += leftCount * rightCount % mod;
                left++;
                right--;
            }else{
                let m = left + right - 1;
                let counts = (m * m - 1) / 2;
                count += (right - left + 1) * (right - left) / 2;
                count %= mod;
                break;
            }
        }
    }
    return count;
};