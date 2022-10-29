function isHappy(n){
    let nums = new Set()
    while (n !== 1){
        n = n.toString().split('').reduce((a,b) => a + Math.pow(b,2),0)
        if(nums.has(n)) return false 
        nums.add(n)
    }
    return true
} 