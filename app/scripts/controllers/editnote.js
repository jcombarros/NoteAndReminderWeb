'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:EditnoteCtrl
 * @description
 * # EditnoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('EditnoteCtrl', function ($scope, apiService) {
    apiService.setEntity('Note');
  	apiService.setId('1');
    apiService.get().then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		alert();
   		}
   	);
    $scope.edit = function(){
    	var note = $scope.note;
    	apiService.setEntity('Note');
    	apiService.setId(note.id);
    	apiService.setEntityObject(note);
    	apiService.edit().then(
	    	function(data){
	    		$scope.note = data;
	    	}, function(data){
	    		alert();
	   		}
   		);
    	//REDIRECT
    };
  });
