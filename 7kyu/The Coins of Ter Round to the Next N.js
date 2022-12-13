function adjust(coin,price) {
    while (price % coin != 0) price++
    return price
  }
  