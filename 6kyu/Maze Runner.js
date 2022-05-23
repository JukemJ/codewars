function mazeRunner(maze, directions) {
    let pos = []
    for (let arr of maze) if(arr.includes(2)) pos =[maze.indexOf(arr),arr.indexOf(2)]
    for (let dir of directions){
      switch (dir){
          case 'N': pos[0]--; break
          case 'E': pos[1]++; break
          case 'S': pos[0]++; break
          case 'W': pos[1]--; break
      }
      if(pos[0] < 0 || pos [0] > maze[0].length - 1 ||
       pos[1] < 0 || pos [1] > maze[0].length - 1) return 'Dead'
      if(maze[pos[0]][pos[1]] == 1) return 'Dead'
      if(maze[pos[0]][pos[1]] == 3) return 'Finish'
    }
    return 'Lost'
}