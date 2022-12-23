function duplicateEncode(word){
    word = word.toLowerCase()
    return word.split('').map(x => word.indexOf(x.toLowerCase()) !== word.lastIndexOf(x.toLowerCase()) ? ')' : '(').join('')
  }