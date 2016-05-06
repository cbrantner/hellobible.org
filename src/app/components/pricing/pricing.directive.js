(function() {
  'use strict';

  angular
    .module('biblebox4kids')
    .directive('acmePricing', acmePricing);

  /** @ngInject */
  function acmePricing() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/pricing/pricing.html',
      scope: {
      },
      controller: PricingController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PricingController() {
  
    }
  }

})();
