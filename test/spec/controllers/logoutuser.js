'use strict';

describe('Controller: LogoutuserCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var LogoutuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoutuserCtrl = $controller('LogoutuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
