'use strict';

describe('Controller: LoginuserCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var LoginuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginuserCtrl = $controller('LoginuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
