'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:ListreminderCtrl
 * @description
 * # ListreminderCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('ListreminderCtrl', function ($scope, $routeParams, $location, apiService) {
  	
  	$scope.getAll = function(){
	    apiService.getAll('Reminder').then(
	    	function(data){
	    		$scope.reminders = data;
	    	}, function(data){
	    		$location.path('/404');
	   		}
	   	);
    }

  	$scope.reminders = {};
  	$scope.reminder = {};
    $scope.getAll();

   	$scope.save = function(){

   		$scope.reminder.completionDate = convertDateTime($scope.completionDate, $scope.completionTime);

   		apiService.save('Reminder', $scope.reminder).then(
	    	function(data){
	    		$scope.reminder = {};
	    		$scope.completionDate = "";
	    		$scope.completionTime = "";
	    		$scope.reminders.push(data);
	    	}, function(data){
	    		alert("A problem has happened. Try again");

	   		}
   		);
   	};

   	$scope.edit = function(id){
   		alert(id);
   	};

   	$scope.delete = function(id){
   		if(confirm("Are you sure you want to delete this Reminder")){
	   		apiService.delete('Reminder', id).then(
		    	function(data){
		    		$scope.getAll();
		    	}, function(data){
	          		alert("A problem has happened. Try again");
		   		}
	   		);
	   	}
   	};

   	var selected;
   	$scope.details = function(id){
   		if(selected){
   			$('#details'+selected).toggleClass('invisible');
   		}
   		if(selected != id){
	   		$('#details'+id).toggleClass('invisible');
			selected = id;
   		}
   		else{
   			selected = null;
   		}
   	};

   	$scope.info = function(id){
   		alert();
   		$('#info'+id).toggleClass('active');
   	};

  });
