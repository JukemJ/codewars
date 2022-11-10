function derDieDas(wort){
    const vowels = 'aeiouäöü'
    let vowelCount = 0
    for(let letter of wort.split('')) if(vowels.includes(letter.toLowerCase())) vowelCount++
    if(vowelCount < 2) return `das ${wort}`
    if(vowelCount > 3) return `der ${wort}`
    return `die ${wort}`
  }