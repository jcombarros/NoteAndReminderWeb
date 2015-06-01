'use strict';

describe('Controller: ViewuserCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var ViewuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewuserCtrl = $controller('ViewuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
