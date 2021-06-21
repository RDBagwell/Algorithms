const nums1 = [3,4,5], nums2 = [1,2];

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