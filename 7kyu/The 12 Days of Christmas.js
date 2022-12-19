var comparator = function(a,b) {
    const order = ['On','12','11','10','9','8','7','6','5','4','3','2','a']
    return order.indexOf(a.split(' ')[0]) - order.indexOf(b.split(' ')[0])
  }