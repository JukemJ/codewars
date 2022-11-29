function onlyOddDigPrimes(n) {
    let arr = []
    for(let i = 3; i <= n; i++){
      if(isPureOddPrime(i)) arr.push(i)
    }
    
    let ans = [arr.length]
    let last = arr.pop()
    if(last == n) ans.push(arr.pop())
    else ans.push(last)
    while(!isPureOddPrime(++n)){}
    ans.push(n)
    return ans
  }
  
  function isPureOddPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i == 0) return false
    }
    return n.toString().split('').every(x => +x % 2 !== 0)
  }