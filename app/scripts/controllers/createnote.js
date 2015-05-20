'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:CreatenoteCtrl
 * @description
 * # CreatenoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('CreatenoteCtrl', function ($scope, apiService) {
  	$scope.note = {};
   
    $scope.save = function(){
    	var note = $scope.note;
		apiService.setEntity('Note');
    	apiService.setEntityObject(note);
    	apiService.save().then(
	    	function(data){
	    		$scope.note = data;
	    	}, function(data){
	    		alert();
	   		}
   		);
    	//REDIRECT
    };
  });
