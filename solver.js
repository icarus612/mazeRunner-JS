const Maze = require("./modules/maze");

let m1 = `
            #########
            #s#   #e#
            # # #   #
            #     # #
            #########
        `;
        
let m = Maze();

m.viewLayout();
m.buildNew(10,10, "r");
m.typeInfo();
m.viewLayout();
