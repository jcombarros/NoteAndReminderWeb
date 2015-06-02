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
    apiService.getByUser('Note').then(
    	function(data){
    		$scope.notes = data;
    	}, function(data){
    		$location.path('/404');
   		}
   	);
    $scope.create = function(){
      $location.path('/createNote');
    };
  });
