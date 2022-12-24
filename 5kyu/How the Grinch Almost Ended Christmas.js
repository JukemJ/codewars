function prioritizeMissiles(missiles){
    missiles.forEach(x => x.time = x.distance/x.speed)
    return missiles.sort((a,b) => a.time - b.time).map(x => x.name)
  }