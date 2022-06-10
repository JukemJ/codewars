// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){
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
      if(sum != 45) return false
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
      if(sum != 45) return false
    }
    
    //check squares
    for(let i = 0; i < squares.length; i+=9){
      const squareSet = new Set(squares.slice(i,i+9))
      let sum = 0
      squareSet.forEach(num => sum += num)
      if(sum != 45) return false
    }
    return true
  }