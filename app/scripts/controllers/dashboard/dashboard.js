'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'scripts/controllers/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  });
