(function() {
    'use strict';

    angular
        .module('sampleApp', [
            'ngRoute',
            'appRoutes',
            'MainCtrl',
            'LoginCtrl',
            'RegisterCtrl',
            'simplePagination',
            'angularSpinner',
            'ngLoadingSpinner'
        ])
        .run(appRun);

    appRun.$inject = ['$location', '$rootScope', '$window'];

    function appRun($location, $rootScope, $window) {
      $rootScope.$on('$routeChangeSuccess', function () {
          $rootScope.showSection = $location.path() !== "/";
      });
    }
})();
