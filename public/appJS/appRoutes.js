var app = angular.module('appRoutes', []);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'views/dashboard.html',
                    controller: 'MainController'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterController'
                })

        $locationProvider.html5Mode(false);
    }]);
