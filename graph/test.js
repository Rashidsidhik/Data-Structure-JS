class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeVertex(vertex){
        while(this.adjacencyList.length){
            const adjacentVertex=this.adjacencyList.pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2){   
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(vertex=> vertex !==vertex2 )
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(vertex=> vertex !==vertex2 )
    }
}