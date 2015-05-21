'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:ListnoteCtrl
 * @description
 * # ListnoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('ListnoteCtrl', function ($scope, $routeParams, $location, apiService) {
    apiService.setEntity('Note');
    apiService.get().then(
    	function(data){
    		$scope.notes = data;
    	}, function(data){
    		alert();
   		}
   	);
    $scope.create = function(){
      $location.path('/createNote');
    };
  });
