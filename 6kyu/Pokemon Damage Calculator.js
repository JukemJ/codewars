function calculateDamage(yourType, opponentType, attack, defense){
    switch (yourType){
      case 'fire':
        switch (opponentType){
          case 'fire' : return 50 * (attack / defense) * 0.5
          case 'water' : return 50 * (attack / defense) * 0.5
          case 'grass' : return 50 * (attack / defense) * 2
          default : return 50 * (attack / defense)
        }
      case 'water':
        switch (opponentType){
          case 'water' : return 50 * (attack / defense) * 0.5
          case 'grass' : return 50 * (attack / defense) * 0.5
          case 'electric' : return 50 * (attack / defense) * 0.5
          case 'fire' : return 50 * (attack / defense) * 2
          default : return 50 * (attack / defense)
        }
      case 'electric':
        switch (opponentType){
          case 'electric' : return 50 * (attack / defense) * 0.5
          case 'water' : return 50 * (attack / defense) * 2
          default : return 50 * (attack / defense)
        }
      case 'grass':
        switch (opponentType){
          case 'grass' : return 50 * (attack / defense) * 0.5
          case 'water' : return 50 * (attack / defense) * 2
          case 'fire' : return 50 * (attack / defense) * 0.5
          default : return 50 * (attack / defense)
        }
    }
  }