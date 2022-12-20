function absentVowel(x){
    const vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
      if(!x.includes(vowels[i])) return i
    }
  }