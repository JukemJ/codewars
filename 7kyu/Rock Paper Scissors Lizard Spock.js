function rpsls(pl1,pl2){
    if(pl1 == pl2) return 'Draw!'
    switch (pl1){
      case 'scissors': return pl2 == 'lizard' || pl2 == 'paper' ? 'Player 1 Won!' : 'Player 2 Won!'
      case 'paper': return pl2 == 'rock' || pl2 == 'spock' ? 'Player 1 Won!' : 'Player 2 Won!'
      case 'rock': return pl2 == 'scissors' || pl2 == 'lizard' ? 'Player 1 Won!' : 'Player 2 Won!'
      case 'lizard': return pl2 == 'paper' || pl2 == 'spock' ? 'Player 1 Won!' : 'Player 2 Won!'
      case 'spock': return pl2 == 'scissors' || pl2 == 'rock' ? 'Player 1 Won!' : 'Player 2 Won!'
    }
  
  }