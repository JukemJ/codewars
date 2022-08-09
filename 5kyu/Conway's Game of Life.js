function nextGen (cells) {
    let ans = []
    for(let i = 0; i < cells.length; i++){
      let row = []
      for(let j = 0; j < cells[i].length; j++){
        let neighbors = 0
        
        //check top
        if(i > 0 && cells[i-1][j] == 1) neighbors++
        
        //check below
        if(i < cells.length - 1 && cells[i+1][j] == 1) neighbors++
        
        //check left
        if(j > 0 && cells[i][j-1] == 1) neighbors++
        
        //check right
        if(j < cells[i].length - 1 && cells[i][j+1] == 1) neighbors++
        
        //check top left
        if(i > 0 && j > 0 && cells[i-1][j-1] == 1) neighbors++
          
        //check top right
        if(i > 0 && j < cells[i].length - 1 && cells[i-1][j+1] == 1) neighbors++
          
        //check bottom left
        if(i < cells.length - 1 && j > 0 && cells[i+1][j-1] == 1) neighbors++
        
        //check bottom right
        if(i < cells.length - 1 && j < cells[i].length - 1 && cells[i+1][j+1] == 1) neighbors++
        
        if(cells[i][j] == 1){
          if(neighbors < 2)row.push(0)
          else if(neighbors > 3) row.push(0)
          else row.push(1)
          }
        else neighbors == 3 ? row.push(1):row.push(0)
      }
      ans.push(row)
    }
    return ans
  }