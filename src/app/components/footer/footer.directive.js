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
    function FooterController() {

  
    }
  }

})();
