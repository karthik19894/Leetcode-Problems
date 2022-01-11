So for converting the binary to decimal number, we will use the following formula:
​
for example: if binary num is 01101
then decimal conversion for it can be written as follows:
(2^4 * 0)+ (2^3 * 1)+(2^2 * 1)+ (2^1 * 0)  + (2^0 * 1)
So if we look at the formula it is framed from LSB to MSB with powers of 2 increasing by 1 for each bit.
So now to solve this problem in optimal way, we know that every time we visit a node we are appending the value of the node to the Least Significant Bit, hence we can say that the decimal value at the current node is
`2^1 * prevVal + 2 ^ 0 * currentNodeVal`
so to simplify it further we can say it as `(2 * prevVal) + currentNodeVal`