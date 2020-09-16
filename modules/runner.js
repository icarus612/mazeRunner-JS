const Node = require("./node");

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
        
        getOpenNodes() {
            let p = this.maze.layout;
            for (let x = 0; x < p.length; x++){
                for (let y = 0; y < p[x].length; y++){
                    if (p[x][y] != maze.wallChar) {
                        this.openNodes.push(Node([x, y]));
                    }
                }
            }
        },

        findEndPoints() {
            const check = (nodeVal) => {
                let node = null;
                let onv = this.openNode.map((i)=> i.value);
                if (onv.includes(nodeVal)) {
                    node = Node(nodeVal);
                } else {
                    openNodes.map((i) => {
                        if (i.value == nodeVal) {
                            node = i;
                        }
                    });
                }
                return node;
            }
            for (let x = 0; x < this.maze.layout.length; x++) {
                for (let y = 0; y < this.maze.layout[x].length; y++) {
                    let p = this.maze.layout[x][y];
                    if (p == this.maze.startChar) {
                        start = check([x, y]);
                    } else if (p == this.maze.endChar) {
                        end = check([x, y]);
                    }
                }
            }
        },

        lookAround(node) {
            this.openNodes.map((i) => {
                if (i.value[0] - 1 == node.value[0] && i.value[1] == node.value[1]) {
                    node.addChild(i);
                } else if (i.value[0] + 1 == node.value[0] && i.value[1] == node.value[1]) {
                    node.addChild(i);
                } else if (i.value[1] - 1 == node.value[1] && i.value[0] == node.value[0]) {
                    node.addChild(i);
                } else if (i.value[1] + 1 == node.value[1] && i.value[0] == node.value[0]) {
                    node.addChild(i);
                }
            });
        },

        makeNodePaths() {
            this.toVisit.push(start);
            while (toVisit.length > 0) {
                [... toVisit].map((point) => {
                    toVisit.remove(point);
                    if (!visited.includes(point)) {
                        lookAround(point);
                        visited.add(point.value);
                        let newPath = new Set(...point.path);
                        newPath.add(point.value);
                        point.children.map((i) => {
                            i.setPath(newPath);
                            if (i.value == end.value) {
                                completed = true;
                            } else {
                                toVisit.push(i);
                            }
                        });
                    }  
                });
            }
        },

        viewCompleted() {
            mappedMaze.map((i) => console.log(i));
        },

        buildPath(path="x") {
            let otherOptions = ["x", "o", "+", "*", "p"];
            if (path == this.maze.startChar || path == this.maze.endChar || path == this.maze.wallChar || path == this.maze.openChar) { 
                console.log("Path character is already being used as a maze character trying something else...");
                for (let i in otherOptions) { 
                    if (i !== this.maze.startChar && i !== this.maze.endChar && i !== this.maze.wallChar && i !== this.maze.openChar) {
                        path = i;
                        console.log(`New path character: ${i}`);
                        break;             
                    } 
                }
            }
            mappedMaze = this.maze.layout.map((i)=> [...i]);
            for (let i = 0; i < mappedMaze.length; i++) {
                for (let j = 0; j < mappedMaze[i].length; j++) {
                    this.end.path.map((p)=> {
                        if (p == [i][j] && [i][j] != this.start.value) {
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

module.exports = Runner;