'use strict';
var app = angular.module("LoginCtrl", []);
app.controller("LoginController", ['$rootScope', '$scope', '$location','$http','$log', function ($rootScope, $scope, $location,$http,$log) {

	$scope.submit	=	function(){
		var data 	=	$.param({
			username	:	$scope.username,
			password 	: 	$scope.password
		});
		var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

		$http.post('/login',data,config).success(function (responsedata, starus, headers, config) {
        	if(responsedata === "Success."){
        		$location.path('/');
        	}else{
        		alert(responsedata);
        	}
    	});
	}
    

}]);


