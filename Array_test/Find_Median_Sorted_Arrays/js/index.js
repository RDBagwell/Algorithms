const nums1 = [3,4,5], nums2 = [1,2], testArray = [9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25];
const matrix = [[1,5,9],[10,11,13],[12,13,15]];

// Created My own Merge Sort Algorithm 97% in LeetCode
function findMedianSortedArrays(nums1, nums2) {
    let i = 0, j = 0, results = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            results.push(nums1[i]);
            i++;
        } else {
            results.push(nums2[j]);
            j++
        }
    }

    while (i < nums1.length) {
        results.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        results.push(nums2[j]);
        j++;
    }
    
    if(results.length === 1) return results[0];

    if(results.length % 2 !== 0){
        return results[Math.floor(results.length / 2)];
    } else {
        const left = results[results.length / 2];
        const right = results[(results.length-1) - results.length/2] 
        let median = (left + right)/2;
        return median;
    }

}

// Refactored Faster than above function 100% in LeetCode
function findMedianSortedArrays2(nums1, nums2) {
    let results = nums1.concat(nums2);
    results.sort((a,b) => a-b);
    if(results.length % 2 !== 0){
        return results[Math.floor(results.length / 2)];
    } else {
        const left = results[results.length / 2];
        const right = results[(results.length-1) - results.length/2];
        let median = (left + right)/2;
        return median;
    }
}

/** Other Statistics Functions   **/

function findMean(nums) {
    let sum = 0;
    nums.forEach(toSum => {
        sum += toSum
    });
    return sum/nums.length;
}

function findMedian(nums) {
    nums.sort((a,b) => a-b);
    if(nums.length % 2 !== 0){
        return nums[Math.floor(nums.length / 2)];
    } else {
        const left = nums[nums.length / 2];
        const right = nums[(nums.length-1) - nums.length/2];
        let median = (left + right)/2;
        return median;
    }
}

function findMode(nums) {
    nums.sort((a,b) => a-b);
    let bestStreak = 1, bestElem = nums[0], currentStreak = 1, currentElem = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(nums[i-1] !== nums[i]){
            if(currentStreak > bestStreak){
                bestStreak = currentStreak;
                bestElem = currentElem;
            }
            currentStreak = 0;
            currentElem = nums[i];
        }
        currentStreak++;
    }
    return currentStreak > bestStreak ? currentElem : bestElem;
}

function findRange(nums) {
    nums.sort((a,b) => a-b);
    const left = nums[0];
    const right = nums[nums.length-1];
    return right - left;
}

function findIQR(nums) {
    nums.sort((a,b) => a-b);
    const half_length = Math.ceil(nums.length / 2);    
    const leftSide = nums.splice(0,half_length);
    const rightSide = nums.splice(half_length.length, half_length);
    const q1 = findMedian(leftSide);
    const q2 = findMedian(rightSide);
    if(q1 < q2){
        return q2 - q1;
    } else {
        return q1 - q2;
    }
}

function kthSmallest(matrix, k) {
    let concatArry = [];
    matrix.forEach(res=>{
        concatArry = concatArry.concat(res);
    });
    concatArry.sort((a,b)=>a-b);
    return concatArry[k-1];
}

function canJump(arr) {
    let maxJumps = 0;
    for (let i = 0; i < arr.length; i++) {
        if(i > maxJumps) return false;
        if( i + arr[i] >= arr.length - 1) return true
        maxJumps = Math.max(maxJumps, i + arr[i]);
    }
    return false
}

const test = [2,3,1,1,4]

console.log(test.pop())