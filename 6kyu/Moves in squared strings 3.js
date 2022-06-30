function rot90Clock(strng) {
  return diag1Sym(strng).split('\n').map(x=>x.split('').reverse().join('')).join('\n')
}
function diag1Sym(strng) {
  let ans = []
  let squaredString = strng.split('\n').map(x=>Array.from(x))
  console.log(squaredString)
  for(let i = 0; i < squaredString.length; i++){
    let temp = []
    for(let j = 0; j <squaredString.length; j++){
      temp.push(squaredString[j][i])
    }
    ans.push(temp.join(''))
  }
  return ans.join('\n')
}
function selfieAndDiag1(strng) {
  let selfie = strng.split('\n')
  let diag = diag1Sym(strng).split('\n')
  let ans = []
  for(let i = 0; i < selfie.length; i++){
    ans.push(`${selfie[i]}|${diag[i]}`)
  }
  return ans.join('\n')
}
function oper(fct, s) {
    return fct(s)
}

//tests
console.log(diag1Sym('abcd\nefgh\nijkl\nmnop'))
//rot90Clock("rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb")// "Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle"