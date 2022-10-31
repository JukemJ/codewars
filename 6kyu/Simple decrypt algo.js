function decrypt(encryption) {
    let ans = Array(26).fill(0)
    for (let letter of encryption){
      if(letter.charCodeAt(0) < 123 && letter.charCodeAt(0) > 96){
        ans[letter.charCodeAt(0) - 97]++
      }
    }
    return ans.join('')
  }