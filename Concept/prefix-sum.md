# Prefix Sum/Running sum

A prefix sum is the cumulative sum of elements in an array from the 0th index to a given index. It is a common technique used in array processing, often applied in range sum queries, sub array problems

The prefix sum at index i is the sum of all elements from index 0 to i
sab array arr[] of size N A prefix sum array is another array prefixSum[] of the same size is arr[0] + arr[1] + arr[2] . . . arr[i]

> prefix[i]=prefix[i−1]+a[i], where prefix[0]=a[0]

> pre_sum[i+1]=pre_sum[i]+arr[i+1]

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

### difference array technique

its apply in a range update to an array
technique that can give you an end array after performing range queries of the form update(l, r, x).
update(l, r, x) means add x to all the elements in an array within the range l to r. arr[l] += x, arr[l + 1] += x, arr[l + 2] += x, ... arr[r] += x.
The arr is an array of size 5. diffArr stores all the differences between the two elements.
where diffArr[i]=arr[i]-arr[i-1] 1<=i<=N
and arr[i]=diffArr[i]+arr[i-1]
Initial Array: [0, 0, 0, 0, 0]
Update Querys=[(1,3,2),(2,4,3),(0,2,-2)]
steps:

1. Query (1, 3, 2):
   Index: 0 1 2 3 4
   Array: [0, 2, 0, 0, -2]

2. Query (2, 4, 3):
   Index: 0 1 2 3 4
   Array: [0, 2, 3, 0, -2]

3. Query (0, 2, -2):
   Index: 0 1 2 3 4
   Array: [-2, 2, 3, 2, -2]

Final Result: [-2, 2, 3, 2, -2]

    ```
    let N = 7; // size of the array
    let arr = [5, 7, 1, 3, 9, 6, 2];
    let diffArr = new Array(N + 1).fill(0);

    function initiateDiffArray() {
        for (let i = 1; i < N; i++) {
            diffArr[i] = arr[i] - arr[i - 1];
        }
    }

    function update(l, r, val) {
        diffArr[l] += val;
        if (r + 1 < diffArr.length) {
            diffArr[r + 1] -= val;
        }
    }
    ```
