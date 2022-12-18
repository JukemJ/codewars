function formatNumber(number, template) {
    number = number.toString().split('')
    let ans = ''
    if (number.length < template.split('').filter(x => x == '#').length) return 'Invalid phone number'
    for (let char of template){
      if(char == '#') ans += number.shift()
      else ans += char
    }
    return ans
  }