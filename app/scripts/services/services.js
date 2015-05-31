'use strict';

/**
 * @ngdoc service
 * @name noteAndReminderWebApp.services
 * @description
 * # services
 * Factory in the noteAndReminderWebApp.
 */
var app = angular.module('noteAndReminderWebApp')
app.factory('apiService', function ($rootScope, $http, $q, authService) {
  var service = {};
  var baseUrl = "http://localhost:8080/NoteAndReminderApi/api";
  var entity = "";
  var id = "";

  var finalUrl ="";

  var entityObject = {};

  var makeUrl = function(){
    finalUrl = baseUrl + "/" +  entity + "/" + id;
  }

  var setEntity = function(data){
    entity = data;
  }

  var setId = function(data){
    id = data;
  }

  var setEntityObject = function(data){
    entityObject = data;
  }

  service.getAll = function(entity){
    return methodREST('GET', entity, "", {});
  }

  service.get = function(entity, id){
    return methodREST('GET', entity, id, {});
  }

  service.save = function(entity, object){
    return methodREST('POST', entity, "", object);
  }

  service.edit = function(entity, id, object){
    return methodREST('PUT', entity, id, object);
  }

  service.delete = function(entity, id){
    return methodREST('DELETE', entity, id, {});
  }

  var methodREST = function(methodREST, entity, id, object){
    setEntity(entity);
    setId(id);
    setEntityObject(object);

    makeUrl();

    var deferred = $q.defer();
    $http({
      method: methodREST,
      data: entityObject,
      headers: {'Authorization': authService.getAccessToken()},
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

app.factory('authService', function ($rootScope, $http, $q) {
  var service = {};
  var baseUrl = "http://localhost:8080/NoteAndReminderApi/auth";
  var entity = "";
  var id = "";
  var finalUrl ="";

  service.loginToken = {};

  var makeUrl = function(){
    finalUrl = baseUrl + "/" +  entity + "/" + id;
  }
  var setEntity = function(data){
    entity = data;
  }
  var setId = function(data){
    id = data;
  }

  service.getAccessToken = function () {
        return service.loginToken.token;
    };

  service.login = function(token){
    return methodREST('POST', "authenticate", token);
  }

  var methodREST = function(methodREST, entity, token){
    setEntity(entity);
    setId(id);

    makeUrl();

    var deferred = $q.defer();
    $http({
      method: methodREST,
      data: token,
      url: finalUrl
    }).success(function(data){
      service.loginToken = data;
      $rootScope.logged = true;
      deferred.resolve(data);
    }).error(function(){
      deferred.reject('There was an error')
    })
    return deferred.promise;
  }

  return service;

});