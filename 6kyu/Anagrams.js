function anagrams(word, words) {
    return words.filter(x => x.split('').sort().join('') == word.split('').sort().join(''))
  }