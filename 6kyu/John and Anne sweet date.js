function sweetDate(w1,r1,w2,r2,timePeriod){
    let john = []
    let anne = []
    for(let i = 0; i < timePeriod; i+= w1 + r1){
      john = john.concat(Array(w1).fill('work'))
      john = john.concat(Array(r1).fill('rest'))
    }
    for(let i = 0; i < timePeriod; i+= w2 + r2){
      anne = anne.concat(Array(w2).fill('work'))
      anne = anne.concat(Array(r2).fill('rest'))
    }
    return john.slice(0,timePeriod).filter((x,i) => x == anne[i] && x == 'rest').length
    
    
  }