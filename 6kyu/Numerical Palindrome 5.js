function palindrome(num) {
    if(!Number.isInteger(num) || num<0) return 'Not valid'
    num = num.toString().split('')
    let set = new Set()
    for(let i = 0; i < num.length; i++) if(!set.delete(num[i])) set.add(num[i])
    return set.size < 2 && num.length > 1
  }