function robberEncode(sentence) {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    let ans = ''
    for(let letter of sentence){
        consonants.includes(letter.toUpperCase()) ?
        letter.toUpperCase() == letter ? ans += `${letter}O${letter}` : ans += `${letter}o${letter}` : ans += letter
    }
    return ans
  }