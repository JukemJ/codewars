function nextPal(val) {
    val++
    while (!palindrome(val))val++
    return val
  }
    
  function palindrome(num){
    return num.toString() === num.toString().split('').reverse().join('')
  }