//Remove all prime numbers from a given array.

function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }
  return true; // Prime number
}

// Function to remove prime numbers from an array
function removePrimes(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      result.push(arr[i]); // Only push non-prime numbers
    }
  }

  return result;
}
