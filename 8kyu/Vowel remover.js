function shortcut (string) {
    const vowels = 'aeiou'
    let ans = ''
    for(let letter of string) if(!vowels.includes(letter)) ans += letter
    return ans
  }