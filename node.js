const Node = (value) => {
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
            console.log(this.path.size)
            if (this.path.size == 0 || nodePath.length < this.path.size) {
                this.path = nodePath            
            }
        },

        removeChild(childNode) {
            this.children = this.children.filter((i)=> i != childNode)
        }
    }
}

module.exports = Node