function numericals(s){
    let ans = ''
    let obj = {}
    for(let letter of s){
      obj[letter] ? obj[letter]++ : obj[letter] = 1
      ans += obj[letter]
    }
    return ans
  }