function countConsonants(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    return new Set(str.toLowerCase().split('').filter(x => consonants.includes(x))).size
  }