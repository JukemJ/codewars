function maxGap (numbers){
    let gap = 0
    numbers = numbers.sort((a,b)=>a-b)
    for(let i = 1; i < numbers.length; i++) gap = Math.max(Math.abs(numbers[i-1] - numbers[i]),gap)
    return gap
  }