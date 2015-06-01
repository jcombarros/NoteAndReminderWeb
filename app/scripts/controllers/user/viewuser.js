'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:ViewuserCtrl
 * @description
 * # ViewuserCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('ViewuserCtrl', function ($rootScope, $scope, $location, apiService) {
    apiService.get('User', $rootScope.userId).then(
    	function(data){
    		$scope.user = data;
    	}, function(data){
    		$location.path('/404');
   		}
   	);

    $scope.back = function(){
       $location.path('/listNote');
    };

    $scope.edit = function(){
       $location.path('/editUser/' + $rootScope.userId);
    };
  });
