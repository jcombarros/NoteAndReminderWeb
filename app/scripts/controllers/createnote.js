'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:CreatenoteCtrl
 * @description
 * # CreatenoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('CreatenoteCtrl', function ($scope, $routeParams, $location, apiService) {
  	$scope.note = {};
   
    $scope.save = function(){
    	apiService.save('Note', $scope.note).then(
	    	function(data){
	    		$scope.note = data;
	    	}, function(data){
	    		alert();
	   		}
   		);
    	$scope.back();
    };

    $scope.back = function(){
       $location.path('/listNote');
    };

  });
