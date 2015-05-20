'use strict';

describe('Controller: ListnoteCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var ListnoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListnoteCtrl = $controller('ListnoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
