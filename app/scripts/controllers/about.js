'use strict';

/**
 * @ngdoc function
 * @name noteAndReminderWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noteAndReminderWebApp
 */
angular.module('noteAndReminderWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
