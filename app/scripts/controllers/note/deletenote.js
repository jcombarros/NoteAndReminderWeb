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
    apiService.get('Note', $routeParams.noteId).then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		$location.path('/404');
   		}
   	);
    $scope.delete = function(){
    	apiService.delete('Note', $scope.note.id).then(
	    	function(data){
	    		//$scope.note = data;
	    	}, function(data){
          alert("A problem has happened. Try again");
	   		}
   		);
    	$location.path('/listNote');
    };

    $scope.back = function(){
       $location.path('/editNote/' + $scope.note.id);
    };
  });
