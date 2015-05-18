'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
