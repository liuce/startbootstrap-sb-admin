/**
 * Developer : Knight Liu (ce.liu@presenceofit.com)
 * Date : Jul 22,2015
 * All code (c)2015 Presence of IT. All rights reserved
 */
'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'scripts/controllers/main/main.html',
        controller: 'MainCtrl'
      });
  });
