// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.


function meeting(s) {
    str = '('
    arr = (s.split(';').sort(function(a, b) {
                                    const nameA = a.slice(a.indexOf(':') + 1).toUpperCase() // ignore upper and lowercase
                                    const nameB = b.slice(b.indexOf(':') + 1).toUpperCase() // ignore upper and lowercase                    
                                    if (nameA < nameB) {
                                      return -1
                                    }
                                    if (nameA > nameB) {
                                      return 1
                                    }
                                    return a.toUpperCase() < b.toUpperCase() ? -1 : 1
                                  }))
    for(element of arr){
      str += element.slice(element.indexOf(':') + 1).toUpperCase()
      str += ', '
      str += element.slice(0, element.indexOf(':')).toUpperCase()
      str +=')('
    }
    return(str.slice(0,str.length - 1))
  }