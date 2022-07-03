function checkvsl(x, y, field) {

    if ((x > 0) && (y < 9))
        if (field[x - 1][y + 1] == 1) return 5;
    if ((x < 9) && (y < 9)) {
        if (field[x + 1][y + 1] == 1) return 5;
        if ((field[x + 1][y] == 1) && (field[x][y + 1] == 1)) return 5;
    }
    if (y < 9)
        if (field[x][y + 1] == 1) return 1 + checkvsl(x, y + 1, field);

    if (x < 9)
        if (field[x + 1][y] == 1) return 1 + checkvsl(x + 1, y, field);

    return 1;
}


function fieldValidator(field) {
    let ships ={submarines:0, cruisers:0, destroyers:0, battleship:0}
    for (let y = 0; y < 10; y++)
        for (let x = 0; x < 10; x++) {


            if (field[x][y] == 1) {
                if ((x > 0) && (field[x - 1][y] == 1)) continue;
                if ((y > 0) && (field[x][y - 1] == 1)) continue;


                switch (checkvsl(x, y, field)) {
                    case 1:
                        ships.submarines++;
                        break;
                    case 2:
                        ships.destroyers++;
                        break;
                    case 3:
                        ships.cruisers++;
                        break;
                    case 4:
                        ships.battleship++;
                        break;
                    default:
                        return false;
                }
            }
        }

    return ships.submarines == 4 && ships.destroyers == 3 && ships.cruisers == 2 && ships.battleship == 1
}