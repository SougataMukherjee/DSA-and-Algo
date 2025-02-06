# Prefix Sum

A prefix sum is the cumulative sum of elements in an array from the 0th index to a given index. It is a common technique used in array processing, often applied in range sum queries, subarray problems

The prefix sum at index i is the sum of all elements from index 0 to i
prefix[i]=prefix[i−1]+a[i], where prefix[0]=a[0]

let a=[1,4,2,3,7] so prefA=[1,5,8,11,18]
prefA[3] 1+4+2+3=10
prefA[4]= prefA[3]+7=prefA[i-1]+prefA[i]=17

```
function prefixSumArray(arr){
let prefixSum=arr;
for(let i=1;i<arr.length;i++){
prefixSum[i]+=prefixSum[i-1]+arr[i]
}
return prefixSum
}
```
