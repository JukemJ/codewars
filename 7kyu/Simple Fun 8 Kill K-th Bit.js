function killKthBit(n, k) {
    n = n.toString(2).split('')
    n[n.length-k] = 0
    return parseInt(n.join(''),2)
  }