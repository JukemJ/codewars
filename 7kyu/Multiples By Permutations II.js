function findLowestInt(k) {
    let num = 1
    let a = (num * k).toString().split('').sort().join('')
    let b = (num * (k+1)).toString().split('').sort().join('')
  
    while(a != b){
      num++
      a = (num * k).toString().split('').sort().join('')
      b = (num * (k+1)).toString().split('').sort().join('')
    }
    return num
  }