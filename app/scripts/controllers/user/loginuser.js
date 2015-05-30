'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:LoginuserCtrl
 * @description
 * # LoginuserCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('LoginuserCtrl', function ($scope, $location, authService) {
    $scope.token = {};
    alert(authService.getAccessToken());
    $scope.login = function(){
    	authService.login($scope.token).then(
	    	function(data){
	    		$scope.token = data;
	    		$scope.back();
	    	}, function(data){
	    		alert("Incorrect email/password");
	    		$scope.token.password = "";
	   		}
	   	);
    };

    $scope.back = function(){
       $location.path('/');
    };
  });
