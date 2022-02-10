// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.equilibriumPoint(a, n));
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        if(n===1) return 1;
        const prefixSum = new Array(n).fill(0);
        const suffixSum = new Array(n).fill(0);
        for(let i=0; i < n; i++){
            prefixSum[i] = i > 0 ? a[i] + prefixSum[i-1] : a[i];
        }
        for(let i=1; i < n-1; i++){
            let leftSum = prefixSum[i-1];
            let rightSum = prefixSum[n-1] - prefixSum[i];
            if(leftSum === rightSum) return i+1;
        }
        return -1;
    }
}