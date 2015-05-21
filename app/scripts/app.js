'use strict';

/**
 * @ngdoc overview
 * @name noteAndReminderWebApp
 * @description
 * # noteAndReminderWebApp
 *
 * Main module of the application.
 */
angular
  .module('noteAndReminderWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/createNote', {
        templateUrl: 'views/createnote.html',
        controller: 'CreatenoteCtrl'
      })
      .when('/editNote', {
        templateUrl: 'views/editnote.html',
        controller: 'EditnoteCtrl'
      })
      .when('/viewNote', {
        templateUrl: 'views/viewnote.html',
        controller: 'ViewnoteCtrl'
      })
      .when('/listNote', {
        templateUrl: 'views/listnote.html',
        controller: 'ListnoteCtrl'
      })
      .when('/deleteNote', {
        templateUrl: 'views/deletenote.html',
        controller: 'DeletenoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
