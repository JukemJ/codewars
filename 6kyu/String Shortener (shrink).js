function shorten(string, length, glue = '...') {
    if(string.length <= length) return string
    if(glue.length >= length - 1) return string.slice(0,length)
    let left = []
    let right = []
    for(let i = 0; left.length + right.length + glue.length < length; i++){
      right.unshift(string[string.length - 1 - i])
      if(left.length + right.length + glue.length == length) break
      left.push(string[i])
    }
    return `${left.join('')}${glue}${right.join('')}`
  }