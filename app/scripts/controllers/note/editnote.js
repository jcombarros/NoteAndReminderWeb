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
    apiService.get('Note', $routeParams.noteId).then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		$location.path('/404');
   		}
   	);
    $scope.edit = function(){
    	var note = $scope.note;
    	apiService.edit('Note', note.id, note).then(
	    	function(data){
	    		$scope.note = data;
	    	}, function(data){
	    		alert("A problem has happened. Try again");
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
