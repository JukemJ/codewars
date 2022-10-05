const characters = ['A','K','e']

function decode(str){
    let ans = ''
    for(let letter of str){
        characters.includes(letter) ? ans += ' ' : ans += letter
    }
    return ans
}

console.log(decode(''))