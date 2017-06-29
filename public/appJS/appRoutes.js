(function(){
    'use strict';

    angular
        .module('appRoutes', ['ngRoute'])
        .config(RouteConfig)

    RouteConfig.$inject     =   ['$routeProvider','$locationProvider'];

    function RouteConfig($routeProvider,$locationProvider){
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
    }
})();
