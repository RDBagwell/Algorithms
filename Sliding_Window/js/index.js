const numArray = [1,2,3,4,5,6,7,8,9,10,11]

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum
    for(i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum(numArray, 3))