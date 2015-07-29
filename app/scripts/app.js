'use strict';

angular.module('startbootstrap', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-flot'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.when('/index', '/dashboard');
    $urlRouterProvider.when('/', '/dashboard');
    $urlRouterProvider.when('/index.html', '/dashboard');
    $urlRouterProvider.otherwise("/otherwise");
    $locationProvider.html5Mode(true);
  });
3
