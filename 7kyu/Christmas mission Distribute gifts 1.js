function distributeGifts(wishes){
    return wishes.map(x => isPrime(x) ? x : biggestFactor(x)).reduce((a,b) => a+b,0)
    
    
  }
  
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0) return false
    }
    return true
  }
  
  function biggestFactor(num){
    for(let i = num - 1; i > 0; i--) if(num % i == 0) return i
  }