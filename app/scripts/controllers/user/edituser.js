'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:EdituserCtrl
 * @description
 * # EdituserCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('EdituserCtrl', function ($rootScope, $scope, $location, apiService) {
  	$scope.oldPassword = '';
	$scope.newPassword = '';
	$scope.newPasswordAgain = '';

    apiService.get('User', $rootScope.userId).then(
    	function(data){
    		$scope.user = data;
    	}, function(data){
    		$location.path('/404');
   		}
   	);
    $scope.edit = function(){
    	var user = $scope.user;
    	if(changePass){
    		if(user.password != $scope.oldPassword){
    			alert('Your old password is not correct');
	    		$scope.oldPassword = '';
	    		return false;
			}else{
			    if($scope.newPassword == '' || $scope.newPassword != $scope.newPasswordAgain){
	    			alert('The new password does not match');
	    			$scope.newPasswordAgain = '';
	    			return false;
			    }
			    else{
			    	user.password = $scope.newPassword;
			    }	

	    	}
    	}
		
    	apiService.edit('User', user.id, user).then(
	    	function(data){
	    		$scope.user = data;
	    	}, function(data){
	    		alert("A problem has happened. Try again");
	   		}
   		);
    	$scope.back();

    };
    $scope.back = function(){
       $location.path('/viewUser');
    };
	
	var changePass = false;
	$scope.changePassword = function(){
		$('#changePasswordDiv').toggleClass('invisible');
		changePass = !changePass;
		if(changePass){
			$("#changePasswordButton").html('<strong>Not</strong> Change password');
		}
		else{
			$("#changePasswordButton").html('Change password');
		}
	}

    $scope.delete = function(){
       $location.path('/deleteUser');
    };
  });
