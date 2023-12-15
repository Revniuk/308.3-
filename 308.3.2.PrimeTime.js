function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function findNextPrime(n) {
    let num = n;
    while(true) {
        num++;
        if(isPrime(num)) {
            console.log(num);
            break;
        }
    }
}

// Test the function with n = 4
findNextPrime(4);

