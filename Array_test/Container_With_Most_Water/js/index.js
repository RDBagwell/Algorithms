const containerArray = [7,9,2,3,1]; // 7 * 4 = 28;

const nums1 = [], nums2 = [1,2,3,4,5];


function containerWithMostWater(nums){
    let i = 0, j = nums.length - 1, maxArea = 0;
    while (i < j) {
        const L = Math.min(nums[i], nums[j]);
        const W = j - i;
        const area = L * W;
        maxArea = Math.max(area, maxArea);
        if(nums[i] <= nums[j]){
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
   
}


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

console.log(findMedianSortedArrays(nums1, nums2));