'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:CreatenoteCtrl
 * @description
 * # CreatenoteCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('CreatenoteCtrl', function ($scope, getService) {
  	getService.setEntity('Note');
  	getService.setId('1');
    getService.get().then(
    	function(data){
    		$scope.note = data;
    	}, function(data){
    		alert();
   		}
   	);
    $scope.save = function(){
    	var note = $scope.note;
    	alert(note.title + note.description);
    };
  });
