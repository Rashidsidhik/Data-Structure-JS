class Graph{
    constructor(){
        adjacencyList = {}
    }

    addVertex(value){
        this.adjacencyList[value] = []
    }

    addEdge(veter1, veter2){
        this.adjacencyList[veter2].push(veter1)
        this.adjacencyList[veter1].push(veter2)
    }



    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacent = adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacent)
        }
        delete this.adjacencyList[vertex]
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex1 !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex2 !== vertex1)
    }
    
}


const g = new Graph();