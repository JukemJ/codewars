function addArrays(array1, array2) {
    let sum = +array1.reduce((a,b)=>a + b,'') + +array2.reduce((a,b)=>a + b,'')
    if(sum == 0)return []
    let ans = sum.toString().split('')
    return ans[0] == '-' ? [-ans[1]].concat(ans.slice(2)).map(x => +x) :
                    ans.map(x => +x) 
  }