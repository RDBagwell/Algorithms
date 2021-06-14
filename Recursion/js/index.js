function countdown(num) {
  if(num <=0 ){
    console.log("All Done")
    return
  }
  console.log(num)
  num--
  countdown(num)
}

// power of 
function power(base, exponent) {
  if( exponent === 0) return 1;
  return base * power(base, exponent -1);
}

// faxtorials 
function factorial(num){
   if(num === 0) return 1
   return num * factorial(num - 1);
}

// array product of 
function productOfArray(arr) {
  if(arr.length === 0){
    return 1;
  }
  return arr[0]  * productOfArray(arr.slice(1))
}

// sum rang of number given
function recursiveRange(rang){
   if(rang === 1) return 1
   return rang + recursiveRange(rang - 1)
}

// fibonacci placment
function fib(n){
  if(n <= 2) return 1
  return fib(n - 1) + fib(n - 2);
}


console.log(fib(6));

