function winner(deckSteve, deckJosh) {
    const cardValues = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    let steve = 0
    let josh = 0
    for(let i = 0; i < deckSteve.length; i++){
      let diff = cardValues.indexOf(deckSteve[i]) - cardValues.indexOf(deckJosh[i])
      if(diff != 0) diff > 0 ? steve++ : josh++
      }
    if(steve == josh) return 'Tie'
    return steve > josh ? `Steve wins ${steve} to ${josh}` : `Josh wins ${josh} to ${steve}`
  }