function isPrime(num) {
  if (num <= 1) return false;  // 0 and 1 are not prime
  if (num === 2) return true;  // 2 is the only even prime number

  // Even numbers greater than 2 are not prime
  if (num % 2 === 0) return false;

  // Check from 3 to sqrt(num), skipping even numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// Test examples
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(17));  // true
console.log(isPrime(20));  // false
console.log(isPrime(1));   // false
console.log(isPrime(97));  // true
