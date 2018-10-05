(function () {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmePricing', acmePricing)
    .controller('SubscribeModalController', SubscribeModalController);

  /** @ngInject */
  function SubscribeModalController($uibModalInstance) {
    var vm = this;

    vm.ok = function () {
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }


  /** @ngInject */
  function acmePricing() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pricing/pricing.html',
      controller: PricingController,
      controllerAs: 'pricingCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PricingController($scope, $uibModal, $log, $window, Analytics, hbTracking) {

      $scope.addToCart = function (plan) {

        var selected   = $scope.selectedOptions[plan];
        var planObject = $scope.option[plan];
        var url = planObject.baseUrl + planObject.children[parseInt(selected) - 1].url;

        if (hbTracking) {
          Analytics.trackEvent('cart', 'add', plan, selected);
          $window.fbq('track', 'AddToCart', {
            content_name: plan + ' ' + selected + ' children',
            value: planObject.children[parseInt(selected) - 1].price,
            currency: "USD",
            content_id: planObject.children[parseInt(selected) - 1].url
          });
        }

        // redirect
        $window.location.href = url;
      }

      $scope.selectedOptions = {
        monthlyPlan : "1",
        sixMonthsPlan : "1",
        twelveMonthsPlan : "1"
      }

      $scope.option =
        {
          monthlyPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/subscribe/",
              children: [
                { price: "22.90", url: "1786138185_hellobible-1child/1786138181_month-to-month"},
                { price: "27.80", url: "1786151870_hellobible-2children/1786151871_month-to-month"},
                { price: "32.70", url: "1786157882_hellobible-3children/1786157878_month-to-month"},
                { price: "37.60", url: "1786158776_hellobible-4children/1786158772_month-to-month"}
              ]
            },
          sixMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/subscribe/",
              children: [
                { price: "131.40", url: "1786138185_hellobible-1child/1786138183_6-month-prepay"},
                { price: "160.80", url: "1786151870_hellobible-2children/1786151873_6-month-prepay"},
                { price: "190.20", url: "1786157882_hellobible-3children/1786157880_6-month-prepay"},
                { price: "219.60", url: "1786158776_hellobible-4children/1786158774_6-month-prepay"}
              ]
            },
          twelveMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/subscribe/",
              children: [
                { price: "238.80", url: "1786138185_hellobible-1child/1786138184_12-month-prepay"},
                { price: "297.60", url: "1786151870_hellobible-2children/1786151874_12-month-prepay"},
                { price: "356.40", url: "1786157882_hellobible-3children/1786157881_12-month-prepay"},
                { price: "415.20", url: "1786158776_hellobible-4children/1786158775_12-month-prepay"}
              ]
            }
        };
    }
  }
})();
