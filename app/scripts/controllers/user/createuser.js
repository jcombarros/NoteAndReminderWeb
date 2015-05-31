'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('CreateuserCtrl', function ($scope, $location, authService) {
    $scope.user = {};
    $scope.passwordAgain = "";
    $scope.create = function(){
    	if($scope.user.password == $scope.passwordAgain){
	    	authService.create($scope.user).then(
		    	function(data){
		    		$scope.token = data;
		    		$scope.back();
		    	}, function(data){
		    		alert("The password is not correct");
		    		$scope.passwordAgain = "";
		   		}
		   	);
    	}
    	else{
    		alert("The password is not correct");
    		$scope.passwordAgain = "";
    	}
    };

    $scope.back = function(){
       $location.path('/');
    };
  });
