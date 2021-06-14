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


/*** practice challenge ****/

// check if duplicates in given argument
function areThereDuplicates(...arg) {
    let start = 0;
    let next = 1;
    arg.sort()
    while (next < arg.length) {
        if(arg[start] === arg[next]){
            return true
        }
        start++
        next++
    }
    return false
}

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (j < str2.length) {
        if(str2[j] === str1[i]){
            i++;
        }
        if(i === str1.length){
            return true;
        }
        j++
    }
    return false

}

console.log(isSubsequence('', 'helloworld'))
