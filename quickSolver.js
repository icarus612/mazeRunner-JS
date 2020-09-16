const Maze = require("./modules/maze");
const Runner = require("./modules/runner");
const fs = require("fs");
const openAndBuild = (file) => {

}

let maze,
    saveFile = "completed.txt";

switch (process.argv.length) {
    case 3: {
        maze = openAndBuild(process.argv[3]);
    }
    case 4: {
        try{
            maze = Maze({ build: [int(process.argv[3]), int(process.argv[4])] });
        } catch(e){
            maze = openAndBuild(process.argv[3]);
            saveFile = process.argv[4];
        }   
    }
    default: { 
        maze = Maze();
        break;
    }
}

maze.viewLayout();
runner = Runner(maze);
runner.makeNodePaths();
let complete = runner.completed ? "Yes" : "No";
console.log(`Is maze possible? ${complete}`);

if (runner.completed) {
    runner.buildPath();
    runner.viewCompleted();
    fs.
}