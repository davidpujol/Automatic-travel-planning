// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {

    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    // functions to be implemented
    // enqueue(item, priority)
    // dequeue()
    // front()
    // isEmpty()
    // printPQueue()

// isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

// enqueue function to add element
// to the queue as per priority
    enqueue(element, priority) {
        // creating object from queue element
        var qElement = new QElement(element, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }

// dequeue method to remove
// element from the queue
    dequeue() {
        // return the dequeued element
        // and remove it.
        // if the queue is empty
        // returns Underflow
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

// front function
    front() {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }


    isInQueue(nom) {
        var p = new PriorityQueue();
        while (!this.isEmpty()) {
            var value = this.front();
            if (value !== nom) {
                p.enqueue(nom);
                this.dequeue();
            }
        }

        return p;
    }

}





app.directive ('findRoute', function (){


    return {
        restrict: 'E',
        scope: {
            cities: "="
        },
        templateUrl: 'js/directives/findRoute.html',

        link: function (scope, element, prop) {


            var calculateAdjacent  = function(city)
            {
                var arr = [];
                var result = scope.cities.reduce (function (adjArray, city_aux) {
                    if (city_aux.name !== city.name) arr.push(city_aux.name);

                    return adjArray;
                }, {});

                return arr;
            };


            //Inicialize map
            var adjecencyList = scope.cities.reduce (function (map, city) {
                map[city.name] = [city.puntuacio, calculateAdjacent(city)];
                return map;
            }, {});



            var algorithm = function(graph, startVertex) {
            var distances = {};
            var visitedVertices = {};
            var previousVertices = {};
            var queue = new PriorityQueue();

            // Init all distances with infinity assuming that currently we can't reach
            // any of the vertices except start one.

            for (var key of Object.keys(graph)){
                distances[key] = Infinity;
                previousVertices[key] = null;
                visitedVertices[key] = false;
            }

            distances[startVertex] = 0;

            // Init vertices queue.
            queue.enqueue(startVertex, distances[startVertex]);

            while (!queue.isEmpty()) {
                var currentVertex = queue.front().element;
                queue.dequeue();
                visitedVertices[currentVertex] = true;
                console.log(currentVertex);

                for (var neighbor of graph[currentVertex][1]) {
                    // Don't visit already visited vertices.

                    if (!visitedVertices[neighbor]) {
                        console.log("node adjacent: " + neighbor);
                        // Update distances to every neighbor from current vertex
                        let weight = graph[neighbor][0];
                        var existingDistanceToNeighbor = distances[neighbor];
                        var distanceToNeighborFromCurrent = distances[currentVertex] - weight;

                        console.log("previous distance:" + existingDistanceToNeighbor + "   new distance: " + distanceToNeighborFromCurrent);
                        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
                            distances[neighbor] = distanceToNeighborFromCurrent;

                            // Remember previous vertex.
                            previousVertices[neighbor] = currentVertex;


                        }

                        queue = queue.isInQueue(neighbor);  //retorna la cua sense el element neighbor
                        queue.enqueue(neighbor, distances[neighbor]);

                    }
                }

                // Add current vertex to visited ones.

            }

            return {
                distances,
                previousVertices,
            };
        }

        console.log(algorithm(adjecencyList, "Rome"))


        //console.log(adjecencyList);


        }


    };

});