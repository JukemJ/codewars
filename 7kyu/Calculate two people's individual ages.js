function getAges(sum,difference){
    if(difference < 0)return null
    let ans = []
    for(let i = 0; i + i + difference <= sum; i+=0.5){
      if(i + i + difference == sum) return [i + difference, i]
    }
    return null
  };