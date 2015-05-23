'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:ViewnoteCtrl
 * @description
 * # ViewnoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('ViewnoteCtrl', function ($scope, $routeParams, $location, apiService) {
    apiService.get('Note', $routeParams.noteId).then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		alert();
   		}
   	);

    $scope.back = function(){
       $location.path('/listNote');
    };

    $scope.edit = function(){
       $location.path('/editNote/' + $routeParams.noteId);
    };
  });
