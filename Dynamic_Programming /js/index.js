// Recusive Fib Brute Force. O[n^2]
function fib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n -2);
}

// Momization O[n]
function fibMomization(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    const res = fibMomization(n-1, memo) + fibMomization(n-2, memo);
    memo[n] = res;
    return res;
}

// Tab O[n]
function fibTab(n) {
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i -1] + fibNums[i -2];
    }
    return fibNums[n];
}


console.log(fibTab(100));
