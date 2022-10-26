function redKnight(N, P) {
    let knightPos = [N,0]
    while(knightPos[1] < P){
      P++
      knightPos = [knightPos[0] ? 0 : 1, knightPos[1]+2]
    }
    return [knightPos[0] ? 'Black' : 'White',knightPos[1]]
  }