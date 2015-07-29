/**
 * Developer : Knight Liu (ce.liu@presenceofit.com)
 * Date : Jul 22,2015
 * All code (c)2015 Presence of IT. All rights reserved
 */
'use strict';
'use strict';

angular.module('startbootstrap')
  .config(function ($stateProvider) {
    $stateProvider
      .state('otherwise', {
        url: '/otherwise',
        templateUrl: 'scripts/controllers/otherwise/otherwise.html',
        controller: 'OtherCtrl'
      });
  });
