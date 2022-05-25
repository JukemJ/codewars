function encode(str,  n){
    let ans = []
    let j = 0
    for(let i = 0; i < str.length; i++){
      ans.push(+str.charCodeAt(i)-96 + +String(n)[j])
      j++
      if(j > String(n).length - 1) j = 0
    }
    return ans
  }