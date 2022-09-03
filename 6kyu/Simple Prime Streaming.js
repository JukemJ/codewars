function solve(a,b){
    let str = ''
    for(let i = 2; str.length <= a+b; i++){
      if(isPrime(i)) str += i
    }
    return str.slice(a,a+b)
  }
  
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0) return false
    }
    return true
  }