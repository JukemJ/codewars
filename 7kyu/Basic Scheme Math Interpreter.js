function scheme(cmd) {
    let args = cmd.slice(1,cmd.length-1).split(' ')
    let op = args.shift()
    if(!args.length){
      switch (op){
          case '*': return 1
          default: return 0
      }
    }
    let ans = +args.shift()
    while (args.length){
      switch (op){
          case '+': 
            ans += +args.shift()
            break
          case '-': 
            ans -= args.shift()
            break
          case '*': 
            ans *= args.shift()
            break
          case '/': 
            ans /= args.shift()
            break
      }
    }
    return ans
  }