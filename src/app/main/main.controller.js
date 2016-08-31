(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $anchorScroll) {
    var vm = this;
    vm.gotoLoc = function(loc) {
      $location.hash(loc);
      $anchorScroll();
    };

  }
})();
