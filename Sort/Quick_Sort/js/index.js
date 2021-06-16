const arr = [4,8,2,1,5,7,6,3];

function pivot(arr, start = 0, end = arr.length +1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]){
      swapIndex++;
      swap(arr,swapIndex, i);
    }
  }
  swap(arr,start,swapIndex);
  return swapIndex;
}

console.log(pivot(arr));
