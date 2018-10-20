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
                var result = scope.cities.reduce (function (adjArray, city_aux) {
                    if (city_aux.name !== city.name) adjArray[city_aux.name] = city_aux;

                    return adjArray;
                }, {});

                return result;
            };


            //Inicialize map
            var adjecencyList = scope.cities.reduce (function (map, city) {
                map[city.name] = calculateAdjencents (city);
                return map;
            }, {});



            algorithm = function(graph, startVertex) {
            const distances = {};
            const visitedVertices = {};
            const previousVertices = {};
            const queue = new PriorityQueue();

            // Init all distances with infinity assuming that currently we can't reach
            // any of the vertices except start one.

            for (var key of graph.keys()){
                distances[key] = Infinity;
                previousVertices[key] = null;
            }

            distances[startVertex] = 0;

            // Init vertices queue.
            queue.add(startVertex, distances[startVertex]);

            while (!queue.isEmpty()) {
                const currentVertex = queue.poll();
                for (var neighbor of graph[currentVertex].second()) {
                    // Don't visit already visited vertices.
                    if (!visitedVertices[neighbor]) {
                        // Update distances to every neighbor from current vertex
                        let weight = graph[neighbor].first();
                        const existingDistanceToNeighbor = distances[neighbor];
                        const distanceToNeighborFromCurrent = distances[currentVertex] + weight;

                        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
                            distances[neighbor] = distanceToNeighborFromCurrent;

                            // Change priority.
                            if (queue.hasValue(neighbor)) {
                                queue.changePriority(neighbor, distances[neighbor]);
                            }

                            // Remember previous vertex.
                            previousVertices[neighbor] = currentVertex;
                        }

                        // Add neighbor to the queue for further visiting.
                        if (!queue.hasValue(neighbor)) {
                            queue.add(neighbor, distances[neighbor]);
                        }
                    }
                }

                // Add current vertex to visited ones.
                visitedVertices[currentVertex] = currentVertex;
            }

            return {
                distances,
                previousVertices,
            };
        }







        }


    };

});