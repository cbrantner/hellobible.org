(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          
      },
      controller: FooterController,
      controllerAs: 'footerCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController($scope, $location, $anchorScroll) {
      var vm = this;
      vm.gotoLoc = function(loc) {
        $location.hash(loc);
        $anchorScroll.yOffset = 30;
        $anchorScroll();
      };
  
    }
  }

})();
