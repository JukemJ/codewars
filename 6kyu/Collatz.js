// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
    let ans = [n]
    while (n != 1){
      if(n % 2 == 0){
        n /= 2
        ans.push(n)
      }
      else {
        n = 3 * n + 1
        ans.push(n)
      }
    }
    return ans.join("->")
  
  }