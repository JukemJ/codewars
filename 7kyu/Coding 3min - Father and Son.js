function sc(s){
    let str = ''
    for(let letter of s){
      if(letter == letter.toUpperCase() && s.includes(letter.toLowerCase())) str += letter
      if(letter == letter.toLowerCase() && s.includes(letter.toUpperCase())) str += letter
    }
    return str
  }