app.directive ('findRoute', function (){
    return {
        restrict: 'E',
        scope: {
            info: "="
        },
        templateUrl: 'js/directives/findRoute.html',

        link: function (scope, element, prop) {

            var citiesMap = scope.info.cities.reduce (function (map, city) {
                map[city.name] = city.type;
                return map;
            }, {});


            console.log(citiesMap["Rome"]);

        }


    };

});