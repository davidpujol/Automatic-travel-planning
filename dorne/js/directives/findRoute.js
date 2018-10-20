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
            var adjacencyList = scope.cities.reduce (function (map, city) {
                map[city.name] = calculateAdjacent (city);
                return map;
            }, {});





        }

    };

});