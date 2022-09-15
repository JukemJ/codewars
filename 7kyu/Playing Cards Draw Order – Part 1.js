const draw = (deck) => {
    let ans = []
    if(deck.length < 2)return deck
    while(deck.length > 1){
      ans.push(deck.shift())
      deck.push(deck.shift())
    }
    ans.push(deck.shift())
    return ans
  };