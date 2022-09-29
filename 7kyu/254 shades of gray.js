function shadesOfGrey(n){
    let arr = []
    for(let i = 1; i <= n && i <= 254; i++){
      let num = i < 16 ? '0' + i.toString(16) : i.toString(16)
      arr.push(`#${num.repeat(3)}`)
    }
    return arr
  }