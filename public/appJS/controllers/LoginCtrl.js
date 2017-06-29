(function() {
    'use strict';

    angular
        .module("LoginCtrl", [])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$location','$http','$log'];

    function LoginController($rootScope, $scope, $location,$http,$log) {
				$scope.submit	=	function(){
						var config = {
									headers: {
											'Content-Type': 'application/json;'
									}
							}

							$http.post('/login',$scope.login,config).success(function (responsedata, starus, headers, config) {
								if(responsedata === "Success."){
									$location.path('/');
								}else{
									alert(responsedata);
								}
						});
				}
    }
})();
