const Maze = ({maze}) => {
    let m = {
        wallChar: (maze.wallChar || "#"),
        startChar: (maze.startChar || "s"),
        endChar: (maze.endChar || "e"),
        openChar: (maze.openChar || " "),
        layout: maze.layout,
        height: (maze.layout.length || 0),
        width: (maze.layout[0].length || 0),
        
        buildNew: (h=0, w=0, mazeType="h") => {
            let openPoints = [];
            if (h == 0) {
                h = height;
            } else {
                height = h;
            }
            if (w == 0) {
                w = width;
            } else {
                width = w;
            }
            for (let i = 0; i < h; i++){
                for (let j = 0; j < w; j++){
                    layout.push([h,w]);
                }
            }
            for (let x = 0; x < layout.length; x++){ 
                for (let y = 0; y < layout[x].length; y++) {
                    let p = layout[x][y];
                    if (p[0] == 0 || p[1] == 0 || p[0] == height - 1 || p[1] == width - 1) {
                        layout[x][y] = wallChar;
                    } else {
                        openPoints.push([x, y]);
                    }
                }
            }
            if (mazeType == "h") {
                let s = [1, Math.floor(Math.random() * (width - 1)) + 1];
                openPoints.splice(openPoints.indexOf(s), 1);
                let e = [height - 2, Math.floor(Math.random() * (width - 1)) + 1];
                openPoints.splice(openPoints.indexOf(e), 1);
            } else if (mazeType == "v") {
                let s = [Math.floor(Math.random() * (height - 1)) + 1, 1];
                openPoints.splice(openPoints.indexOf(s), 1);
                let e = [Math.floor(Math.random() * (height - 1)) + 1, width - 2];
                openPoints.splice(openPoints.indexOf(e), 1);
            } else if (mazeType == "r") {
                let s = [0, 0],
                    e = [0, 0];
                while (s == e) {
                    s = [Math.floor(Math.random() * (height - 1)) + 1, Math.floor(Math.random() * (width - 1)) + 1];
                    e = [Math.floor(Math.random() * (height - 1)) + 1, Math.floor(Math.random() * (width - 1)) + 1];
                }
                openPoints.splice(openPoints.indexOf(s), 1);
                openPoints.splice(openPoints.indexOf(e), 1);
            } else {
                throw "Incorrect Maze type. (try h, v, or r)";
            }
        },

        typeInfo: () => {
            console.log(`    start point: ${startChar}\n    end point: ${endChar}\n open spaces: ${openChar}	wall type: ${wallChar}\n	size: ${maze.height} x ${maze.width}`);
        },

        viewLayout: () => {
            layout.map((i)=> console.log(i));
        }
    }
    if (maze.layout == undefined) {
        let h = (maze.build[0] || 10);
        let w = (maze.build[1] || 10);
        let t = (maze.buildType || "h");
        m.buildNew(h, w, t);
    }
    return m;
}

module.exports = Maze;