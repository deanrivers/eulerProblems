// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10,001st prime number?

//TODO
//1. Run through numbers and decide whether or not that number is Promise.all.apply. it cannot be divided by anything but itself and 1

var number = 0;
var answer = 0;

var primeList = [];

//evaluates whether the number is prime or not
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

//push the prime numbers returned from isPrime into an array
function pushPrime(iterations){

    for(i=0; i<iterations;i++){

        if (isPrime(i)===true){
            primeList.push(i);
            if(primeList.length===10001){
                answer = primeList[primeList.length-1];
                break;
            }
        }
    }
    return answer
}

console.log(pushPrime(500000));

