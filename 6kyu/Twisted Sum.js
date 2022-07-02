function twistedSum(n) {
    let sum = 0
    for(let i = 1; i <= n; i++){
      sum += +String(i).split('').reduce((a,b)=>Number(a)+Number(b))
    }
    return sum
  }