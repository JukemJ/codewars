// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

function validateBattlefield(field) {
    let ships = {battleships:0, cruisers:0, destroyers:0, subs:0}
    
    //field2 is inverted field
    let field2 = []
    for(let i = 0; i < field.length; i++){
        let temp = []
        for(let j = 0; j <field.length; j++){
            temp.push(field[j][i])
        }
        field2.push(temp)
    }

    //find battleship 1x4
    for(let i = 0; i < field.length - 3;i++){
        if(field[i].slice(i,i+4).reduce((a,b)=>a+b) === 4){
            ships.battleships++
        }
    }
    for(let i = 0; i < field2.length - 3;i++){
        if(field2[i].slice(i,i+4).reduce((a,b)=>a+b) === 4){
            ships.battleships++
        }
    }

    //find cruisers 2x3

    //find destroyers 3x2
    //find subs 4x1
    console.log(ships,field,field2)
  }

const field = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
console.log(validateBattlefield(field))