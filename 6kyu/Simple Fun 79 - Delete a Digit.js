function deleteDigit(n) {
    let ans = 0
    for(let i = 0; i < String(n).length; i++){
      let arr = String(n).split('')
      arr.splice(i,1)
      if(Number(arr.join('')) > ans) ans = Number(arr.join(''))
      }
    return ans
  }