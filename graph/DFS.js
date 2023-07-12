class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }
    removeVertext(vertex){
        while(this.adjacencyList.length){
            const adjacentVertex = this.adjacencyList.pop();
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

    depthFirstRecursive(start){
        const result=[];
        const visited={};
        let adjacencyList=this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex) return null; 
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }
            });
        })(start)
        return result;
    }
}

const g = new Graph()
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
g.removeEdge("E","F")
console.log(g.adjacencyList);
//console.log('looking fiy');
//console.log(g.depthFirstRecursive('A'));


//console.log(g.adjacencyList);