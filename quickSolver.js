const Maze = require("./modules/maze");
const Runner = require("./modules/runner");
const fs = require("fs");
const openAndBuild = (file) => {
    fs.readFile(file, 'utf8', (err, data)=> {
        console.log(data);
    });
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
    case 5: {
        maze = Maze({ build: [process.argv[3], process.argv[4]]});
        saveFile = process.argv[5];
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
    let file = ``;
    for (let i in maze.layout) {
        for (let j in i) {
            file += j;
        }
        file += "\n";
    }
    file += "\n Origional maze: \n";
    for  (let i in runner.mappedMaze) {
        for (let j in i) {
            file += j;
        }
        file += "\n";
    }
    file += "\n";
    fs.writeFile(saveFile, file, (err)=> {
        if (err) throw err;
    });
}