function grabscrab(anagram, dictionary) {
    let ans = []
    for(let word of dictionary){
      if(anagram.split('').sort().join('') == word.split('').sort().join('')){
        ans.push(word)
      }
    }
    return ans
  }