function isVeryEvenNumber(n) {
    return n.toString().length < 2 ? n % 2 == 0 : isVeryEvenNumber(n.toString().split('').reduce((a,b)=>a+ +b,0))
  }