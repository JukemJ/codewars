function robberEncode(sentence) {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    let ans = ''
    for(let letter of sentence){
      if (consonants.includes(letter.toUpperCase())){
        letter.toUpperCase() == letter ? ans += `${letter}O${letter}` : ans += `${letter}o${letter}`
      }
      else ans += letter
    }
    return ans
  }