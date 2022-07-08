function formatWords(words){
    if(words == null || !words.length) return ''
    let ans = ''
    words = words.filter(x => x != '')
    if(!words.length) return ''
    if(words.length == 1) return words[0]
    return words.slice(0,words.length -1).join(', ') + ' and ' + words[words.length-1]
    //return ans
  }