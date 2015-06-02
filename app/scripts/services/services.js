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

  service.getByUser = function(entity){
    return methodREST('GET', entity, "", {}, $rootScope.userId);
  }

  var methodREST = function(methodREST, entity, id, object, userId){
    setEntity(entity);
    setId(id);
    setEntityObject(object);
    makeUrl();

    if(userId){
      finalUrl = finalUrl + 'userId=' + userId;
    }

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

  service.getLoginToken = function () {
      return service.loginToken;
  };

  service.setLoginTokenEmpty = function () {
      service.loginToken = {};
  };

  service.login = function(token){
    return methodREST('POST', "authenticate", token);
  }

  service.create = function(user){
    return methodREST('POST', "createUser", user);
  }

  service.logout = function(token){
    return methodREST('POST', "logout", token);
  }

  var methodREST = function(methodREST, entity, object){
    setEntity(entity);
    setId(id);

    makeUrl();

    var deferred = $q.defer();
    $http({
      method: methodREST,
      data: object,
      url: finalUrl
    }).success(function(data){
      if(data.auth){
        service.loginToken = data;
        $rootScope.logged = data.auth;
        $rootScope.userId = data.userId;
      }
      else{
        service.loginToken = {};
        $rootScope.logged = false;
        $rootScope.userId = 0;
      }
      deferred.resolve(data);
    }).error(function(){
      deferred.reject('There was an error')
    })
    return deferred.promise;
  }

  return service;

});