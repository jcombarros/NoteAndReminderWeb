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
	    apiService.getByUser('Reminder').then(
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

   	$scope.action = function(){

   		$scope.reminder.completionDate = convertDateTimeToString($scope.completionDate, $scope.completionTime);

   		if(edition){
   			apiService.edit('Reminder', $scope.reminder.id, $scope.reminder).then(
		    	function(data){
		    		//$scope.reminders.push(data);
		    	}, function(data){
		    		alert("A problem has happened. Try again");

		   		}
	   		);
   		}else{
	   		apiService.save('Reminder', $scope.reminder).then(
		    	function(data){
		    		$scope.reminders.push(data);
		    	}, function(data){
		    		alert("A problem has happened. Try again");

		   		}
	   		);
   		}
   		$scope.back();
   	};

   	var edition = false;
   	$scope.edit = function(id){
   		if(!edition){
	   		$('#divCreate').addClass('invisible');
	   		$('#divEdit').removeClass('invisible');

	   		$scope.reminder = $.grep($scope.reminders, function(e){ return e.id == id; })[0];
	   		$scope.completionDate = convertStringToDate($scope.reminder.completionDate);
			$scope.completionTime = convertStringToTime($scope.reminder.completionDate);

			$('#deleteButton'+id).prop('disabled','disabled');
			$('#info'+id).addClass('active');
	   		edition = true;
   		}
   		
   	};

   	$scope.back = function(id){
   		if(edition){
	   		$('#divCreate').removeClass('invisible');
	   		$('#divEdit').addClass('invisible');
   		}
   		$('#deleteButton'+$scope.reminder.id).removeAttr('disabled');
   		$('#info'+$scope.reminder.id).removeClass('active');

   		$scope.reminder = {};
		$scope.completionDate = "";
		$scope.completionTime = "";
   		edition = false;
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

  });
