function mirror(text){
    let max = Math.max(...text.split(' ').map(x=>x.length))
    let str = '*'.repeat(max+4)
    for(let word of text.split(' ')){
      let temp = word.split(' ').map(x=>x.split('').reverse().join(''))
      str += `\n* ${temp}${' '.repeat(max-word.length)} *`
    }
    str+= `\n${'*'.repeat(max+4)}`
    return str
  }