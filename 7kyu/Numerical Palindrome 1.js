function palindrome(num) { 
    if(typeof num != 'number')return 'Not valid'
    if(num < 0)return 'Not valid'
    return num.toString() == num.toString().split('').reverse().join('')
  } 