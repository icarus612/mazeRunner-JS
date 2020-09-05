const Node = (value) => {
    // const LaddVisited = (node) => {
    //     this.path.add(node)
    // }

    return {
        value: value,
        children: [],
        path: new Set(),

        addVisited(node) {
            this.path.add(node)
        },

        addChild(childNode) {
            this.children.push(childNode)
        },

        setPath(nodePath) {
            if (this.path.length == 0 || nodePath.length < this.path.length) [
                this.path = nodePath
                
            }
        },

        removeChild(childNode) {
            this.children = this.children.filter((i)=> i != childNode)
        }
    }
}

n = Node([22,33])
n.addChild(33)
n.addChild(353)

n.removeChild(33)
n.setPath([33,44,55,66,77])

console.log(n)