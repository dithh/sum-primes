
$(document).ready(function () {
    $(".sum").on("click", function () {
        var range = $(".range").val();
        var primes = getPrimes(range);
        console.log("the result is " + sumPrimes(primes));
    });
});
  
function getPrimes(max) {
    var sieve = [], i, j ,primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    } 
    return primes;
}
function sumPrimes(primes) {
    console.log (primes)
  return primes.reduce(function (total ,current) {
   return total + current;
  });
}