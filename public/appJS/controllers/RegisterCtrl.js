(function() {
    'use strict';

    angular
        .module('RegisterCtrl', [])
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$rootScope', '$scope', '$location', '$log', '$http'];

    function RegisterController($rootScope, $scope, $location, $log, $http) {
        $http.get('calls').then(function(response){
            $log.info(response);
        })
        $scope.submit   =   function(){
          if($scope.registerForm.$valid){
              $log.error($scope.register);
              var config = {
  								headers: {
  										'Content-Type': 'application/json;'
  								}
  						}
              $http.post('/register',$scope.register,config).then(function(response){
                  if(response.status === 200 && response.statusText === "OK"){
                      alert(response.data);
                  }
              })
            }
        }
    }
})();
