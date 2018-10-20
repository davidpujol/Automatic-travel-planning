app.directive ('findRoute', function (){
    return {
        restrict: 'E',
        scope: {
            cities: "="
        },
        templateUrl: 'js/directives/findRoute.html',

        link: function (scope, element, prop) {


            var convertRadians = function (value) {
                return value* Math.PI / 180;
            }


            var findDistance = function(lat1, lon1, lat2, lon2) {
                var R = 6371e3; // metres
                var l1 = convertRadians(lat1);
                var l2 = convertRadians(lat2);
                var difL = convertRadians(lat2-lat1);
                var difLon = convertRadians(lon2-lon1);

                var a = Math.sin(difL / 2) * Math.sin(difL / 2) +
                    Math.cos(l1) * Math.cos(l2) *
                    Math.sin(difLon / 2) * Math.sin(difLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;

                return d;
            }


            console.log(findDistance(44.406704, 8.930931, 45.468461, 9.191475));



        }



    };

});