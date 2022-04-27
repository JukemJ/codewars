function superStreetFighterSelection(fighters, position, moves){
    let ans = []
    let y = position[0]
    let x = position[1]
    for (let move of moves){
      switch (move){
          case 'up':
            if(y > 0 && fighters[y-1][x] !== '') y-- 
            break
          case 'down':
            if(y < fighters.length - 1 && fighters[y+1][x] !== '') y++
            break
          case 'left':
            x--
          if(x < 0)x = fighters[0].length - 1
            while(fighters[y][x] == ''){
              x--
              if(x < 0)x = fighters[0].length - 1
              }
            break
          case 'right':
            x++
            if(x > fighters[0].length - 1)x = 0
            while(fighters[y][x] == ''){
              x++
              if(x > fighters[0].length - 1)x = 0
              }
            break  
      }
      ans.push(fighters[y][x])
    }
    return ans
  }