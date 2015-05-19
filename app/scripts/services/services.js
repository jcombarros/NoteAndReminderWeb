'use strict';

/**
 * @ngdoc service
 * @name noteAndReminderWebApp.services
 * @description
 * # services
 * Factory in the noteAndReminderWebApp.
 */
angular.module('noteAndReminderWebApp')
  .factory('getService', function ($http, $q) {
    var service = {};
    var baseUrl = "http://localhost:8080/NoteAndReminderApi/api";
    var entity = "";
    var id = "";

    var finalUrl ="";

    var makeUrl = function(){
      finalUrl = baseUrl + "/" +  entity + "/" + id + "?callback=mycallback";
    }

    service.setEntity = function(data){
      entity = data;
    }

    service.setId = function(data){
      id = data;
    }

    service.get = function(){
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'JSONP',
        url: finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }

    return service;

  });
