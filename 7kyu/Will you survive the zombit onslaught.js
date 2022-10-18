function zombieShootout (zombies, range, ammo) {
    let killed = 0
    while (range > 0 && zombies > 0 && ammo > 0){
      killed++
      zombies--
      range -= 0.5
      ammo--
    }
    if(zombies == 0) return `You shot all ${killed} zombies.`
    if(range == 0)return `You shot ${killed} zombies before being eaten: overwhelmed.`
    if(ammo == 0) return `You shot ${killed} zombies before being eaten: ran out of ammo.`
    
  }