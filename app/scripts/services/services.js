'use strict';

/**
 * @ngdoc service
 * @name noteAndReminderWebApp.services
 * @description
 * # services
 * Factory in the noteAndReminderWebApp.
 */
angular.module('noteAndReminderWebApp')
  .factory('apiService', function ($http, $q) {
    var service = {};
    var baseUrl = "http://localhost:8080/NoteAndReminderApi/api";
    var entity = "";
    var id = "";

    var finalUrl ="";

    var entityObject = {};

    var makeUrl = function(){
      finalUrl = baseUrl + "/" +  entity + "/" + id;
    }

    service.setEntity = function(data){
      entity = data;
    }

    service.setId = function(data){
      id = data;
    }

    service.setEntityObject = function(data){
      entityObject = data;
    }

    service.get = function(){
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }

    service.save = function(){
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'POST',
        data: entityObject,
        url: finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }

    service.edit = function(){
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'PUT',
        data: entityObject,
        url: finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }

    service.delete = function(){
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'DELETE',
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
