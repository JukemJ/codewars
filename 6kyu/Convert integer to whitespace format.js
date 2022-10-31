function whitespaceNumber(n) {
    if (n == 0) return ' \n'
    let ans = ''
    for(let digit of n.toString(2).split('')){
      if(digit == '-')continue
      ans += digit == '1' ? '\t' : ' '
    }
    return `${n > 0 ? ' ' : '\t'}${ans}\n`
  }