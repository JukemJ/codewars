function countSpecMult(n, mxval) {
    let primes = []
    for (let i = 2; primes.length < n; i++) {
      if(isPrime(i)) primes.push(i)
    }
    let ans = [primes.reduce((a,b) => a * b, 1)]
    let num = ans[0]
    while(num <= mxval){
      num += ans[0]
      ans.push(num)
    }
    return (ans.length - 1)
  }
  
  function isPrime(num){
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++) if(num % i == 0) return false
    return true
  }