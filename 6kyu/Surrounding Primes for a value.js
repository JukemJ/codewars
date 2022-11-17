function primeBefAft(num) {
    let ans = [num - 1,num + 1]
    while(!isPrime(ans[0])) ans[0]--
    while(!isPrime(ans[1])) ans[1]++
    return ans
  }
  
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0) return false
    }
    return true
  }