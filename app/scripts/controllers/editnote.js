'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:EditnoteCtrl
 * @description
 * # EditnoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('EditnoteCtrl', function ($scope, $routeParams, $location, apiService) {
    apiService.setEntity('Note');
  	apiService.setId($routeParams.noteId);
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
    	$scope.back();
    };
    $scope.back = function(){
       $location.path('/viewNote/' + $routeParams.noteId);
    };
    $scope.delete = function(){
       $location.path('/deleteNote/' + $routeParams.noteId);
    };
  });
