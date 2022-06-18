function factorial(n){
    if (n < 0 || n > 12) {
      throw 'RangeError'
    }
    if(n===0)return 1
    let num = 1
    for(let i = 1; i<n;i++){
      num += num * i
    }
    return num
  }