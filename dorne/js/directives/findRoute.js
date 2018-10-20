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
            cities: "=",
            region: "=",
            numberOfDays: "="
        },
        templateUrl: 'js/directives/findRoute.html',


        link: function (scope, element, prop) {
            var convertRadians = function (value) {
                return value * Math.PI / 180;
            }


            var findDistance = function (coord1, coord2) {
                var lat1 = coord1[0];
                var lat2 = coord2[0];
                var lon1 = coord1[1];
                var lon2 = coord2[1];

                var R = 6371e3; // metres
                var l1 = convertRadians(lat1);
                var l2 = convertRadians(lat2);
                var difL = convertRadians(lat2 - lat1);
                var difLon = convertRadians(lon2 - lon1);

                var a = Math.sin(difL / 2) * Math.sin(difL / 2) +
                    Math.cos(l1) * Math.cos(l2) *
                    Math.sin(difLon / 2) * Math.sin(difLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = (R * c) / 1000;

                return d;
            }


            //Inicialize map with every element and it's punctuation
            var allElements = scope.cities.reduce(function (map, city) {
                map[city.name] = city.coord;
                return map;
            }, {});


            var calculaMitjana = function () {
                var total = 0;
                var elements = 0;
                for (var key of Object.keys(allElements)) {
                    for (var key2 of Object.keys(allElements)) {
                        total += findDistance(allElements[key], allElements[key2]);
                        elements += 1;
                    }
                }

                return total / elements;
            }


            var calculateAdjacent = function (city) {
                var arr = [];
                var result = scope.cities.reduce(function (adjArray, city_aux) {
                    var dist = findDistance(city.coord, city_aux.coord);

                    if (city_aux.name !== city.name && dist < calculaMitjana()) arr.push(city_aux.name);

                    return adjArray;
                }, {});

                return arr;
            };

            var calculateAdjacent2 = function (city) {
                var arr = [];
                var result = scope.cities.reduce(function (adjArray, city_aux) {
                    var dist = findDistance(city.coord, city_aux.coord);

                    if (city_aux.name !== city.name && dist < calculaMitjana() && (city_aux.situacio === city.situacio)) arr.push(city_aux.name);

                    return adjArray;
                }, {});

                return arr;
            };


            //Inicialize map for cities in all the country
            var adjecencyListTotal = scope.cities.reduce(function (map, city) {
                map[city.name] = [city.puntuacio, calculateAdjacent(city), city.coord, city.situacio, city.minimum_days, city.url];
                return map;
            }, {});

            //Inicialize map for cities in the north
            var adjecencyListNord = scope.cities.reduce(function (map, city) {
                if (city.situacio === 'N') map[city.name] = [city.puntuacio, calculateAdjacent2(city), city.coord, city.situacio, city.minimum_days, city.url];
                return map;
            }, {});


            //Inicialize map for cities in the south
            var adjecencyListSud = scope.cities.reduce(function (map, city) {
                if (city.situacio === 'S') map[city.name] = [city.puntuacio, calculateAdjacent2(city), city.coord, city.situacio, city.minimum_days, city.url];
                return map;
            }, {});



            var findQueue = function (graph, visitedVertices, currentVertex) {
                var queue = new PriorityQueue();

                for (var neighbor of graph[currentVertex][1]) {
                    // Don't visit already visited vertices.

                    if (!visitedVertices[neighbor]) {
                        let weight = graph[neighbor][0];
                        var total_weight = (findDistance(graph[currentVertex][2], graph[neighbor][2]) / 2) - weight;
                        queue.enqueue(neighbor, total_weight);
                    }
                }
                return queue;
            }


            //startVertex is a string that represents the starting node
            var algorithm = function (graph, startVertex, numberDays) {
                var ruta = [];
                var visitedVertices = {};
                var daysLeft = numberDays;

                for (var key of Object.keys(graph)) {
                    visitedVertices[key] = false;
                }
                ruta.push(startVertex);
                visitedVertices[startVertex] = true;
                daysLeft -= graph[startVertex][4];


                var p = findQueue(graph, visitedVertices, startVertex);    //queue of the elements adjacents to him and not visited

                while (!p.isEmpty() && daysLeft > 0) {
                    var currentVertex = p.front().element;
                    daysLeft -= graph[currentVertex][4];

                    ruta.push(currentVertex);
                    p = findQueue(graph, visitedVertices, currentVertex);
                    visitedVertices[currentVertex] = true;
                }

                return ruta;

            }


            var findRoute = function () {
                var a = [];
                if (scope.region === 'N') a = algorithm(adjecencyListNord, "Turin", scope.numberOfDays);
                if (scope.region === 'S') a = algorithm(adjecencyListSud, "Rome", scope.numberOfDays);
                else a = algorithm(adjecencyListTotal, "Turin", scope.numberOfDays);

                document.getElementById("nameCity").innerHTML = "hi";
            }
            findRoute();

        }
    };
});