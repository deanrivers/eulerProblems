// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//set variables
var integer = 600851475143;
var primeArray = [];
var isPrime;

//find divisors starting with 2

for(i = 2; i <= integer; i++){
  if (integer % i==0) {

    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if the divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }   
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}