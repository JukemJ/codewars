function rot13(str) {
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let uppercase = lowercase.toUpperCase()
    let ans = ''
    for(let letter of str){
      if(lowercase.includes(letter)) ans += lowercase[(lowercase.indexOf(letter) - 13 + 26) % 26]
      else if(uppercase.includes(letter)) ans += uppercase[(uppercase.indexOf(letter) - 13 + 26) % 26]
      else ans += letter
    }
    return ans
  }