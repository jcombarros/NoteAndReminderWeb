'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:LogoutuserCtrl
 * @description
 * # LogoutuserCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('LogoutuserCtrl', function ($scope, $location, authService) {
  	$scope.token = authService.getLoginToken();
    authService.logout($scope.token).then(
    	function(data){
    		$scope.token = data;
    		$scope.back();
    	}, function(data){
    		alert("A problem has happened. Try again");
    		$scope.back();
   		}
   	);
   	

   	$scope.back = function(){
       $location.path('/');
    };
  });
