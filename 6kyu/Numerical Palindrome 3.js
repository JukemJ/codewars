function palindrome(num) { 
    if(!Number.isInteger(num) || num < 0) return 'Not valid'
    let count = 0
    num = num.toString()
    for(let i = 0; i < num.length-1; i++){
      for(let j = i+2; j < num.length+1; j++){
        if (num.slice(i,j) == num.slice(i,j).split('').reverse().join("")) count++
        }
      }
    return count
  }