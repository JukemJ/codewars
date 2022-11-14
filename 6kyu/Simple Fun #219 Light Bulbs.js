function lightBulbs(lights, n) {
    for(let i = 1; i <= n; i++){
      let last = lights[lights.length-1]
      lights = lights.map((x,i,arr) => arr[i-1] == 1 ? !x : x)
      if(last) lights[0] = !lights[0]
      
    }
    return lights.map(x => x ? 1 : 0)
  }