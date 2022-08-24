function removeConsecutiveDuplicates(text){
    let ans = []
    for(let word of text.split(' ')) if(ans[ans.length-1] != word) ans.push(word)
    return ans.join(' ')
  }