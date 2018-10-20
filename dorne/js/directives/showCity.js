app.directive ("showCity", function () {
    return {
        restrict: 'E',
        scope: {
            info:"="
        },
        templateUrl: "js/directives/showCity.html"

    }

});