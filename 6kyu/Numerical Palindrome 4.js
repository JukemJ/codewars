function palindrome(num) {
    if (!Number.isInteger(num)  || num < 0) return 'Not valid'
    
    if(num < 10) num = 10
    let up = num + 1
    while(true){
      if (up.toString() == up.toString().split('').reverse().join('')) return up
      if (num.toString() == num.toString().split('').reverse().join('')) return num
      up++
      if(num > 11) num--
    }
  }