class Node{
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class Graph{
  constructor(){
    this.adjacentcyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacentcyList[vertex]) this.adjacentcyList[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    this.adjacentcyList[vertex1].push(vertex2);
    this.adjacentcyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2){
    this.adjacentcyList[vertex1] = this.adjacentcyList[vertex1].filter(
      v=> v!== vertex2
    );
    this.adjacentcyList[vertex2] = this.adjacentcyList[vertex2].filter(
      v=> v!== vertex1
    );
  }
  removeVertex(vertex){
    while (this.adjacentcyList[vertex].length) {
      const adjacentVertex = this.adjacentcyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentcyList[vertex];
  }
  depthFirstRecusive(start){
    const result = [];
    const visited = {};
    const adjacentcyList = this.adjacentcyList;
    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacentcyList[vertex].forEach(
          neighbor=>{
            if(!visited[neighbor]){
              return dfs(neighbor);
            }
          });
    })(start);
    return result;
  }

  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacentcyList[currentVertex].forEach(neighbor=>{
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });

    }
    return result;
  }

  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacentcyList[currentVertex].forEach(neighbor=>{
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

class WeightedGraph{
  constructor(){
    this.adjacentcyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacentcyList[vertex]) this.adjacentcyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacentcyList[vertex1].push({node:vertex2, weight});
    this.adjacentcyList[vertex2].push({node:vertex1, weight});
  }
  dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallets;
    let path = []; //to return at end
    for (let vertex in this.adjacentcyList) {
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallets = nodes.dequeue().val;
      if(smallets === finish){
        while(previous[smallets]){
          path.push(smallets);
          smallets = previous[smallets]
        }
        break;
      }
      if(smallets || distances[smallets] !== Infinity){
        for(let neighbor in this.adjacentcyList[smallets]){
          //find neighboring node
          let nextNode = this.adjacentcyList[smallets][neighbor];
          //calculate new distance to neighboring node
          let canidate = distances[smallets] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if(canidate < distances[nextNeighbor]){
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = canidate;
            //updating previous - How to get to neighbor
            previous[nextNeighbor] = smallets;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, canidate);
          }
        }
      }
    }
    return path.concat(smallets).reverse()
  }
}

const g  = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.dijkstra("A", "E"));