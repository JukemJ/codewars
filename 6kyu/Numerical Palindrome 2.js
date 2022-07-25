function palindrome(num) {
    if (typeof num != 'number' || num < 0 || !Number.isInteger(num)) return 'Not valid'
    num = num.toString()
    for(let i = 0; i < num.length-1; i++){
      for(let j = i+2; j < num.length+1; j++){
        if (num.slice(i,j) == num.slice(i,j).split('').reverse().join("")) return true
      }
    }
    return false
  }