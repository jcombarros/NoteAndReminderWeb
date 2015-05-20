'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:ViewnoteCtrl
 * @description
 * # ViewnoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('ViewnoteCtrl', function ($scope, apiService) {
    apiService.setEntity('Note');
  	apiService.setId('1');
    apiService.get().then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		alert();
   		}
   	);
  });
