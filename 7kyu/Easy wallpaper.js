function wallpaper(l, w, h) {
    if(!l || !w || !h) return 'zero'
    return numbers[Math.ceil((2 * l * h + 2 * w * h) * 1.15 / 5.2)]
  }