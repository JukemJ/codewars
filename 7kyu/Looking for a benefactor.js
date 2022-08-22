function newAvg(arr, newavg) {
    let ans = newavg * (arr.length+1) - arr.reduce((a,b)=>a+b,0)
    if(ans < 0)throw 'Expected New Average is too low'
    return Math.ceil(ans)
  }