const numArray = [2,3,1,2,4,3]

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {

      if(total < sum && end < nums.length){
        total += nums[end];
            end++;
      }
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
      } 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

console.log(minSubArrayLen(numArray, 7))