function palindrome(num){ 
    if(!Number.isInteger(num) || num < 0) return 'Not valid'
    let ans = []
    num = num.toString()
    for(let i = 0; i < num.length-1; i++){
      for(let j = i+2; j < num.length+1; j++){
        if(num[i] == '0') continue
        if (+num.slice(i,j) === +num.slice(i,j).split('').reverse().join("")) ans.push(num.slice(i,j))
        }
      }
    ans = Array.from(new Set(ans.map(x=>+x).filter(x=>x!=0)))
    return ans.length ? ans.sort((a,b)=>a-b) : 'No palindromes found'
  } 