function tops(msg) {
    let ans = ''
    let num = 1
    let add = true
    for(let i = 1; i < msg.length; i+=num){
      if(add)ans = msg[i] + ans
      add = !add
      num++
    }
    return ans
  }