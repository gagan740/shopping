var sampleApp = angular.module('sampleApp', [
    'ngRoute',
    'appRoutes',
    'MainCtrl',
    'LoginCtrl',
    'RegisterCtrl',
    'simplePagination',
    'angularSpinner',
    'ngLoadingSpinner'
]);

sampleApp.run(['$location', '$rootScope', '$window', function ($location, $rootScope, $window) {

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.showSection = $location.path() !== "/";
        });

    }]);