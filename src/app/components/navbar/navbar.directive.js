(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbarCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $location, $anchorScroll) {
      $scope.navbarCollapsed = true;
      var vm = this;
      vm.gotoLoc = function(loc) {
        $location.hash(loc);
        $anchorScroll.yOffset = 30;
        $anchorScroll();
      };
    }
  }

})();
