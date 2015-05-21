'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:DeletenoteCtrl
 * @description
 * # DeletenoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('DeletenoteCtrl', function ($scope, $routeParams, $location, apiService) {
  	apiService.setEntity('Note');
  	apiService.setId($routeParams.noteId);
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
    	$scope.back();
    };

    $scope.back = function(){
       $location.path('/editNote/' + $routeParams.noteId);
    };
  });
