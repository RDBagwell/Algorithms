const linearSearchArray = ["business","above","dog", 6, 82, "guess", "car"];
const binarySearchArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

function linearSearch(arr,term) {
  let index = 0;
  while (index < arr.length) {
    if(arr[index] === term) return index;
    index++;
  }
  return -1
}

function binarySearch(arr,term){
  let left = 0;
  let right = arr.length -1;
  while (left <= right) {
    let middle = Math.floor((left+right)/2);
    if(arr[middle] === term){
      return middle;
    } else if(arr[middle] < term){
        left = middle + 1;
    } else {
      right = middle -1;
    }
  }
  return -1
}

function naiveSearch(long, short){
  let count = 0;
  for(let i = 0; i < long.length; i++){
    for(j = 0; j < short.length; j++){
      if(short[j] !== long[i+j]) break;
      if(j === short.length -1) count++;
    }
  }
  return count
}

console.log(naiveSearch("lorie loled", "lol"))