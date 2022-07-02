function diag2Sym(strng) {
    let ans = []
    let squaredString = strng.split('\n').map(x=>Array.from(x))
    for(let i = squaredString.length - 1; i >= 0; i--){
        let temp = []
        for(let j = squaredString.length - 1; j >= 0; j--){
          temp.push(squaredString[j][i])
        }
        ans.push(temp.join(''))
      }
    return ans.join('\n')
}

function rot90Counter(strng) {
    return diag2Sym(strng).split('\n').map(x=>x.split('').reverse().join('')).join('\n')
}

function selfieDiag2Counterclock(strng) {
    let selfie = strng.split('\n')
    let diag = diag2Sym(strng).split('\n')
    let rot = rot90Counter(strng).split('\n')
    let ans = []
    for(let i = 0; i < selfie.length; i++){
        ans.push(`${selfie[i]}|${diag[i]}|${rot[i]}`)
    }
    return ans.join('\n')
}

  //tests
let s = "abcd\nefgh\nijkl\nmnop"

console.log(rot90Counter(s))