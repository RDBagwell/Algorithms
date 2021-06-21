const containerArray = [7,9,2,3,1]; // 7 * 4 = 28;

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