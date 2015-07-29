'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'scripts/controllers/login/login.html',
        controller: 'LoginCtrl'
      });
  });
