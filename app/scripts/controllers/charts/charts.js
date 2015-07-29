'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('charts', {
        url: '/charts',
        templateUrl: 'scripts/controllers/charts/charts.html',
        controller: 'ChartsCtrl'
      });
  });
