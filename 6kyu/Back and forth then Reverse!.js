function arrange(s) {
    let ans = []
    for(let i = 0; i < s.length / 2; i++){
      i % 2 == 0 ? ans.push(s[i],s[s.length - i - 1]) :
                   ans.push(s[s.length - i - 1],s[i])
    }
    return s.length % 2 == 0 ? ans : ans.slice(0,ans.length-1)
  }