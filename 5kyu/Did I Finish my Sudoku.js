//Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

function doneOrNot(board){
    let squares1 = []
    let squares2 = []
    let squares3 = []
    //check rows
    for(let row of board){
      squares1 = squares1.concat(row.slice(0,3))
      squares2 = squares2.concat(row.slice(3,6))
      squares3 = squares3.concat(row.slice(6))
      const rowSet = new Set(row)
      let sum = 0
      rowSet.forEach(num => sum += num)
      if(sum != 45) return 'Try again!'
    }
    let squares = squares1.concat(squares2.concat(squares3)) 
    
    //check columns
    for(let i = 0; i < 9; i++){//run 9 times
      let column = []
      for(let j = 0; j < 9; j++){
        column.push(board[j][i])
      }
      let sum = 0
      const columnSet = new Set(column)
      columnSet.forEach(num => sum += num)
      console.log(columnSet,sum)
      if(sum != 45) return 'Try again!'
    }
    
    //check squares
    for(let i = 0; i < squares.length; i+=9){
      const squareSet = new Set(squares.slice(i,i+9))
      let sum = 0
      squareSet.forEach(num => sum += num)
      if(sum != 45) return 'Try again!'
    }
    return 'Finished!'
  }