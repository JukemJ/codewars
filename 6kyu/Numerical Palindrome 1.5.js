function palindrome(num,s) { 
    if(typeof num != 'number' || typeof s != 'number') return 'Not valid'
    if(num < 0 || s < 0)return 'Not valid'
    let ans = []
    if(num < 10) num = 11
    while (ans.length < s){
      
      if(num.toString() == num.toString().split('').reverse().join('')) ans.push(num)
      num++
    }
    return ans
  }