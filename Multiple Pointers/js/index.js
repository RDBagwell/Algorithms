const numArray = [-4,-3,-2,-1,0,1,2,5];

const uniqueValues = [-4,-3,-2,-1,0,1,1,5];

function sumZero(numArray) {
    let start = 0
    let end = numArray.length -1
    while (start < end) {
        let sum = numArray[start] + numArray[end];
        if(sum === 0){
            return [numArray[start], numArray[end]]
        } else if(sum > 0){
            end--;
        } else {
            start++;
        }
    }
    return undefined;
}

function countUniqueValues(arr) {
    let count = 0;
    let index = 0;
    let next_index = 0;
    while(index < arr.length){
        next_index = index + 1;
        if(arr[index] !== arr[next_index]){
            count++;
        } 
        index++;
    }
    return count;

}

function countUniqueValuesB(arr){
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUniqueValuesB(uniqueValues));
