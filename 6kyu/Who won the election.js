function getWinner(listOfBallots) {
    let ballotBox = {}
    for(let vote of listOfBallots){
      ballotBox[vote] ? ballotBox[vote]++ : ballotBox[vote] = 1
    }
    let leader = Object.keys(ballotBox).sort((a,b) => ballotBox[b] - ballotBox[a])[0]
    if(ballotBox[leader] > listOfBallots.length / 2) return leader
    return null
  }