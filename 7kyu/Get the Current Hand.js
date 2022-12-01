function getCurrentHand(arr) {
    let last4 = arr.slice(-4)
    return Array.from(new Set(arr.filter(x => !last4.includes(x))))
 }