function reverseLetter(str) {
    return str.split('').filter(x=>x.charCodeAt(0)>96 && x.charCodeAt(0)<123).reverse().join('')
  }