function solve(n) {
    let arr = []
    for(let i = 1; arr.length <= n; i++){
      if(i.toString().split('').filter(x => isPrime(+x)).length == 0 && !isPrime(i)){
         arr.push(i)
        }
    }
    return arr.pop()
  };
  
  function isPrime(num){
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++) if(num % i == 0)return false
    return true
  }