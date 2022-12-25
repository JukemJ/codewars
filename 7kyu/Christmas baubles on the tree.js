function baublesOnTree(baubles, branches){
    if(branches == 0) return 'Grandma, we will have to buy a Christmas tree first!'
    let ans = Array(branches).fill(0)
    let idx = 0
    while (baubles){
      ans[idx++]++
      if(idx === ans.length) idx = 0
      baubles--
    }
    return ans
  }