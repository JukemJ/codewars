function correctness(bob, expert) {
    let ans = 0
    bob.forEach((x,i) => x == expert[i] ? ans++ : x == '?' || expert[i] == '?' ? ans+=0.5:ans+=0)
    return ans
  }