function solution(digits){
    let num = 0
    for(let i = 0; i < digits.length - 4; i++){
      if(Number(digits.slice(i,i+5)) > num)num = Number(digits.slice(i,i+5))
    }
    return num
  }