const Node = (value) => {
    return {
        value: value,
        children: [],
        path: new Set(),

        addVisited: (node) => {
            path.add(node)
        },

        addChild: (childNode) => {
            this.children.push(childNode)
        },

        setPath: (nodePath) => {
            if (!path || nodePath.length < path.length) path = nodePath
        },

        removeChild: (childNode) => {
            children.remove(childNode)
        }
    }
}

n = Node([22,33])
n.addChild(33)
n.addChild(353)
n.addVisited(33)
n.addVisited(33)
n.addVisited(463)
console.log(n)