// return all the spiral permutation of the (s) string
function spiralPermutations(s) {
    let ans = [s]
    while(true){
      let str = ''
      for(let i = 0; i < s.length / 2; i++){
        str += ans[ans.length-1][s.length - i - 1]
        str += ans[ans.length-1][i]
      }
      str.length == s.length ? ans.push(str) : ans.push(str.slice(0,str.length-1))
      if(s === ans[ans.length-1]) return ans.slice(0,ans.length - 1)
    }
  }