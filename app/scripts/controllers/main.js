'use strict';

/**
 * @ngdoc function
 * @name biblebox4kidscomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biblebox4kidscomApp
 */
angular.module('biblebox4kidscomApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
     $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
     };
  });
