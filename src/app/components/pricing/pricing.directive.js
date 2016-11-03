(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmePricing', acmePricing);

  /** @ngInject */
  function acmePricing() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/pricing/pricing.html',
      scope: {
      },
      controller: PricingController,
      controllerAs: 'pricingCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PricingController($scope) {


      $scope.checkBoxValue = "default";

      $scope.options = {
        gift: [
          {
            name : "One Month Gift",
            price : "$29.90",
            save : null,
            bestValue : "Most popular"
          },
          {
            name : "3 Months Gift",
            price : "$75.00",
            save : "$15",
            bestValue : null
          },
          {
            name : "6 Months Gift",
            price : "$143",
            save : "$36",
            bestValue : null
          },
          {
            name : "12 Months Gift",
            price : "$274",
            save : "$84",
            bestValue : null
          }
        ],
        default: [
          {
            name : "Monthly",
            price : "$24.90",
            save : null,
            bestValue : "Best value"
          },
          {
            name : "3 Months",
            price : "$24.90",
            save : null,
            bestValue : null
          },
          {
            name : "6 Months",
            price : "$23.90",
            save : null,
            bestValue : null
          },
          {
            name : "12 Months",
            price : "$22.90",
            bestValue : null
          }
        ]
      }


    }
  }

})();
