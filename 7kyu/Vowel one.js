function vowelOne(s){
    const vowels = 'aeiou'
    return s.split('').map(x => vowels.includes(x.toLowerCase()) ? 1 : 0).join('')
  }