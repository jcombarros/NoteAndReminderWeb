'use strict';

describe('Controller: CreatenoteCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var CreatenoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatenoteCtrl = $controller('CreatenoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
