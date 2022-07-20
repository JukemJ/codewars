function defineSuit(card) {
    let cards = {'♣':'clubs','♦':'diamonds', '♥':'hearts','♠':'spades'}
    return cards[card[card.length-1]]
  }