function zeroAndOne(s) {
    s = s.split('')
    for(let i = 0; i < s.length; i++){
      let byte = s.slice(i,i+2).join('')
      if(byte == '01' || byte == '10'){
        s.splice(i,2)
        i--
        }
    }
    return s.length
  }