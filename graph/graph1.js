class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        this.adjacencyList[vertex]=[]
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex=> vertex!=vertex2) 
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex=> vertex!=vertex1)  
    }


    print=()=> console.log(this.adjacencyList);
}

const graph=new Graph();
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addEdge('a','b')
graph.addEdge('b','c')
graph.removeEdge('a','b')
graph.print()