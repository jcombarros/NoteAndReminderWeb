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
      .when('/404', {
        templateUrl: '404.html'
      })
      .when('/createNote', {
        templateUrl: 'views/note/createnote.html',
        controller: 'CreatenoteCtrl'
      })
      .when('/editNote/:noteId', {
        templateUrl: 'views/note/editnote.html',
        controller: 'EditnoteCtrl'
      })
      .when('/viewNote/:noteId', {
        templateUrl: 'views/note/viewnote.html',
        controller: 'ViewnoteCtrl'
      })
      .when('/listNote', {
        templateUrl: 'views/note/listnote.html',
        controller: 'ListnoteCtrl'
      })
      .when('/deleteNote/:noteId', {
        templateUrl: 'views/note/deletenote.html',
        controller: 'DeletenoteCtrl'
      })
      .when('/listreminder', {
        templateUrl: 'views/reminder/listreminder.html',
        controller: 'ListreminderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
