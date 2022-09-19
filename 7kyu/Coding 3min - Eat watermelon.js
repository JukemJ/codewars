function sc(watermelon){
    let seeds = []
    seeds.push(watermelon.slice(0,4).map(x => x.slice(0,4).reduce((a,b)=>a+b)).reduce((a,b)=>a+b))
    seeds.push(watermelon.slice(4).map(x => x.slice(0,4).reduce((a,b)=>a+b)).reduce((a,b)=>a+b))
    seeds.push(watermelon.slice(0,4).map(x => x.slice(4).reduce((a,b)=>a+b)).reduce((a,b)=>a+b))
    seeds.push(watermelon.slice(4).map(x => x.slice(4).reduce((a,b)=>a+b)).reduce((a,b)=>a+b))
    return seeds.filter(x => x > 5).reduce((a,b)=>a + b,0)
    }