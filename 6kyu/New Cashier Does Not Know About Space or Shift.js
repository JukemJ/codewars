// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
    let order = {burger:0, fries:0, chicken:0, pizza:0, sandwich:0, onionrings:0, milkshake:0, coke:0}
    let ans = []
    let tempString = ''
    for (let i = 0; i < input.length; i++){ //get number of items from input
      tempString += input[i]
      if (Object.keys(order).includes(tempString)){
        order[tempString]++
        tempString = ''
        }
    }
    for (let item in order) { //count and format
      for (i = 1; i <= order[item]; i++) ans.push(item[0].toUpperCase() + item.slice(1))
    }
  
    return ans.join(' ')
  }