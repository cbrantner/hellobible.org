(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, $stateParams, $location, $anchorScroll) {

    var loc = $stateParams.location;
    if (loc) {
      $location.hash(loc);
      $anchorScroll.yOffset = 30;
      $anchorScroll();
    }
  }
})();
