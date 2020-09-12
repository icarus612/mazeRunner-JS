import Node from "node.js";

const Runner = (maze) => {
    let r =  {
        maze,
        openNodes: [],
        visited: [],
        toVisit: [],
        start: null,
        end: null,
        completed: false,
        mappedMaze: [],
        possiblePaths: [],
        
        getOpenNodes: () => {
            let p = maze.layout;
            for (let x = 0; x < p.length; x++){
                for (let y = 0; y < p[x].length; y++){
                    if (p[x][y] != maze.wallChar) {
                        openNodes.push(Node([x, y]));
                    }
                }
            }
        },

        findEndPoints: () => {

        },

        lookAround: (node) => {
            openNodes.map((i) => {
                if (i.value[0] - 1 == node.value[0] && i.value[1] == node.value[1]) {
                    node.addChild(i);
                } else if 
            });
        },

        makeNodePaths: () => {

        },

        viewCompleted: () => {
            mappedMaze.map((i) => console.log(i));
        },

        buildPath: (path="x") => {
            let otherOptions = ["x", "o", "+", "*", "p"];
            if (path == maze.startChar || path == maze.endChar || path == maze.wallChar || path == maze.openChar) { 
                console.log("Path character is already being used as a maze character trying something else...");
                otherOptions.map((i)=> { 
                    if (i == maze.startChar || i == maze.endChar || i == maze.wallChar || i == maze.openChar) {
                        continue;                        
                    } else {
                        path = i;
                        console.log(`New path character: ${i}`);
                        break;
                    }
                });
            }
            mappedMaze = maze.layout.map((i)=> [...i]);
            for (let i = 0; i < mappedMaze.length; i++) {
                for (let j = 0; j < mappedMaze[i].length; j++) {
                    end.path.map((p)=> {
                        if (p == [i][j] && [i][j] != start.value) {
                            mappedMaze[i][j] = path;
                        } 
                    });
                }
            }
        }
    }

    r.getOpenNodes();
    r.findEndPoints();
    return r;
}