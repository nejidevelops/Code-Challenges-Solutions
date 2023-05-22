function sumPrimes(num) {
    function isPrime(n) {
      if (n < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    let primeSum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        primeSum += i;
      }
    }
  
    return primeSum;
}

sumPrimes(10);