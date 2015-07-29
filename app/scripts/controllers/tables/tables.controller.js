'use strict';

angular.module('startbootstrap')
  .controller('TablesCtrl', function ($scope, $log) {
    $scope.class= function(per){
      if(per == 0){
        return "active";
      }
      if(per == 1){
        return "success";
      }
      if(per == 2){
        return "warning";
      }
      if(per == 3){
        return "danger";
      }
      return "";
    };
    $scope.tables = [
      {
        page: '/index.html',
        visit: 1265,
        newVisit:'32.3%',
        revenue:321.33
      },
      {
        page: '/about.html',
        visit: 261,
        newVisit:'33.3%',
        revenue:234.12
      },
      {
        page: '/sales.html',
        visit: 665,
        newVisit:'21.3%',
        revenue:16.34
      },
      {
        page: '/blog.html',
        visit: 9516,
        newVisit:'89.3%',
        revenue:1644.43
      },
      {
        page: '/404.html',
        visit: 23,
        newVisit:'34.3%',
        revenue:23.52
      },
      {
        page: '/services.html',
        visit: 421,
        newVisit:'60.3%',
        revenue:'724.32'
      },
      {
        page: '/blog/post.html',
        visit: 1233,
        newVisit:'93.2%',
        revenue:126.34
      }
    ]
  });
