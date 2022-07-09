function minimumNumber(numbers){
    let sum = numbers.reduce((a,b)=>a+b)
    let prime = 0
    while(!isPrime(sum + prime)) prime++
    return prime
  }
  
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++) if(num % i == 0) return false
    return true
  }