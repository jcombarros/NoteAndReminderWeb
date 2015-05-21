'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:DeletenoteCtrl
 * @description
 * # DeletenoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('DeletenoteCtrl', function ($scope, apiService) {
  	apiService.setEntity('Note');
  	apiService.setId('1');
    apiService.get().then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		alert();
   		}
   	);
    $scope.delete = function(){
    	var note = $scope.note;
    	apiService.setEntity('Note');
    	apiService.setId(note.id);
    	apiService.delete().then(
	    	function(data){
	    		$scope.note = data;
	    	}, function(data){
	    		alert();
	   		}
   		);
    	//REDIRECT
    };
  });
