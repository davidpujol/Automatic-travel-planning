app.directive ('findRoute', function (){
    return {
        restrict: 'E',
        scope: {
            cities: "="
        },
        templateUrl: 'js/directives/findRoute.html',

        link: function (scope, element, prop) {

            //Inicialize map
            var adjecencyList = scope.cities.reduce (function (map, city) {
                map[city.name] = calculateAdjencents (city);
                return map;
            }, {});




            }






        }


    };

});