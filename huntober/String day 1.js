//e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs
let map = new Map([['0','O'],['1','I'],['2','Z'],['3','E'],['4','h'],
                   ['5','S'],['6','G'],['7','L'],['8','B'],['9','q'],
                   ['O','0'],['I','1'],['Z','2'],['E','3'],['h','4'],
                   ['S','5'],['G','6'],['L','7'],['B','8'],['q','9']])

function decode(str){
    let ans = ''
    for (let letter of str){
        
        map.has(letter) ? ans += map.get(letter) : ans += letter
    }
    return ans
}