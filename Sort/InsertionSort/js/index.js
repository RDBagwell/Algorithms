let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length;

function insertionSort(arr, n) {
  let i, j, key;
  for ( i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = key;
  }
  return arr
}

console.log(insertionSort(arr, n));