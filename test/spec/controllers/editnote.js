'use strict';

describe('Controller: EditnoteCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var EditnoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditnoteCtrl = $controller('EditnoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
