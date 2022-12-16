function customChristmasTree(chars,n){
    let idx = 0
    let arr = []
    for(let i = 1; i <= n; i++){
      let str = ' '.repeat(n - i)
      for(let j = 1; j <= i; j++){
        str += `${chars[idx++]} `
        if(idx == chars.length) idx = 0
      }
      arr.push(str.trimEnd())
    }
    arr = arr.concat(Array(Math.floor(n/3)).fill(`${' '.repeat(n - 1)}|`))
    return arr.join('\n')
  }