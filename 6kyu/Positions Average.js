function posAverage(s) {
    let common = 0
    let total = 0
    s = s.split(', ')
    for(let i = 0; i < s.length - 1; i++){
      for(let j = i+1; j < s.length; j++){
        for(let k = 0; k < s[i].length; k++){
          total++
          if(s[i][k] == s[j][k])common ++
        }
      }
    }
     return common / total * 100
   }