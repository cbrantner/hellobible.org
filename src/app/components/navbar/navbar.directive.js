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
      controller: NavbarController,
      controllerAs: 'navbarCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope) {
      $scope.navbarCollapsed = true;

    }
  }

})();
