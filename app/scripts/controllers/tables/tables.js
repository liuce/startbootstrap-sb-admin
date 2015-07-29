'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tables', {
        url: '/tables',
        templateUrl: 'scripts/controllers/tables/tables.html',
        controller: 'TablesCtrl'
      });
  });
