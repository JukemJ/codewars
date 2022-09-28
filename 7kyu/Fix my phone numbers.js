function isItANum(str) {
    str = str.split('').filter(x => x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58)
    
    return str.length == 11 && str[0] == '0' ? str.join('') : 'Not a phone number'
  }