function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
    let cash = 0
    let availableLifelines = ['1','2','3']
    let safeHaven = 0
    for(let i = 0; i < playerActions.length; i++){
      if(i % 5 == 0) safeHaven = cash
      if(playerActions[i].includes('1')) availableLifelines.splice(availableLifelines.indexOf('1'),1)
      if(playerActions[i].includes('2')) availableLifelines.splice(availableLifelines.indexOf('2'),1)
      if(playerActions[i].includes('3')) availableLifelines.splice(availableLifelines.indexOf('3'),1)
      if(playerActions[i].includes('W')) return [cash, 3 - availableLifelines.length]
      if(playerActions[i].includes('X')) return [safeHaven, 3 - availableLifelines.length] //???
      if(playerActions[i].slice(-1) !== correctAnswers[i]) return [0, 3 - availableLifelines.length]
      if(playerActions[i].slice(-1) == correctAnswers[i]) cash += prizeFund[i]
    }
    return [cash, 3 - availableLifelines.length]
  }