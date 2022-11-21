function numberJoy(n) {
    let sum = n.toString().split('').reduce((a,b) => +a + +b)
    let rev = sum.toString().split('').reverse().join('')
    return sum*rev == n
  }