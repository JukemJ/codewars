function howMuchILoveYou(petals) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    let num = petals % 6 - 1
    return num === -1 ? phrases[phrases.length - 1] : phrases[num]
  }
  