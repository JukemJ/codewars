function streetFighterSelection(fighters, position, moves){
    let ans = []
    for (let move of moves){
      switch (move){
          case 'up':
            if(position[0] > 0)position[0]--
            break
          case 'down':
            if(position[0] < fighters.length - 1)position[0]++
            break
          case 'left':
            position[1]--
            if(position[1] < 0)position[1] = fighters[0].length - 1
            break
          case 'right':
            position[1]++
            if(position[1] > fighters[0].length - 1)position[1] = 0
            break  
      }
      ans.push(fighters[position[0]][position[1]])
    }
    return ans
  }