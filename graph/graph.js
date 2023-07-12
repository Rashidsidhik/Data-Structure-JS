class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    removeVertext(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();    
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex=> vertex !==vertex2 )   
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex=> vertex !==vertex1 )
    }

    print=()=> console.log(this.adjacencyList);

}

const g = new Graph()
g.addVertex('tokyo');
g.addVertex('ireland');
g.addVertex('kochi');
g.addEdge('tokyo','kochi');
g.addEdge('tokyo','ireland');
g.removeEdge('tokyo','ireland')
g.removeVertext('tokyo')
g.print()