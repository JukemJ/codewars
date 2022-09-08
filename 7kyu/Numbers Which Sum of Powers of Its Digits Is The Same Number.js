function eqSumPowdig(hMax, exp) {
    let arr = []
    for(let i = 2; i <= hMax; i++){
      if(i.toString().split('').reduce((a,b) => a + b**exp,0) == i) arr.push(i)
    }
    return arr
  }