var calculate = function calculate(a, o, b) {
    switch (o){
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return b == 0 ? null : a / b
    }
    return null
  }