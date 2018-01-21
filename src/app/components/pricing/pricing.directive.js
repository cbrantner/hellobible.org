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
                { price: "19.90", url: "1114186904_hellobible-for-1-child/1114186900_month-to-month"},
                { price: "24.80", url: "1114187468_hellobible-for-2-children/1114187464_month-to-month"},
                { price: "29.70", url: "1114187845_hellobible-for-3-children/1114187839_month-to-month"},
                { price: "34.60", url: "1114188232_hellobible-for-4-children/1114188228_month-to-month"},
                { price: "39.50", url: "1114188709_hellobible-for-5-children/1114188705_month-to-month"},
                { price: "44.40", url: "1114189029_hellobible-for-6-children/1114189030_month-to-month"},
                { price: "49.30", url: "1114189650_hellobible-for-7-children/1114189651_month-to-month"},
                { price: "54.20", url: "1114190043_hellobible-for-8-children/1114190039_month-to-month"},
                { price: "59.10", url: "1114190339_hellobible-for-9-children/1114190335_month-to-month"},
                { price: "64.00", url: "1114186146_hellobible-for-10-children/1114186147_month-to-month"}
              ]
            },
          sixMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/subscribe/",
              children: [
                { price: "113.40", url: "1114186904_hellobible-for-1-child/1114186902_6-month-prepay"},
                { price: "142.80", url: "1114187468_hellobible-for-2-children/1114187466_6-month-prepay"},
                { price: "172.20", url: "1114187845_hellobible-for-3-children/1114187841_6-month-prepay"},
                { price: "201.60", url: "1114188232_hellobible-for-4-children/1114188230_6-month-prepay"},
                { price: "231.00", url: "1114188709_hellobible-for-5-children/1114188707_6-month-prepay"},
                { price: "260.40", url: "1114189029_hellobible-for-6-children/1114189032_6-month-prepay"},
                { price: "289.80", url: "1114189650_hellobible-for-7-children/1114189653_6-month-prepay"},
                { price: "319.20", url: "1114190043_hellobible-for-8-children/1114190041_6-month-prepay"},
                { price: "348.60", url: "1114190339_hellobible-for-9-children/1114190337_6-month-prepay"},
                { price: "378.00", url: "1114186146_hellobible-for-10-children/1114186149_6-month-prepay"}
              ]
            },
          twelveMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/subscribe/",
              children: [
                { price: "214.80", url: "1114186904_hellobible-for-1-child/1114186903_12-month-prepay"},
                { price: "273.60", url: "1114187468_hellobible-for-2-children/1114187467_12-month-prepay"},
                { price: "332.40", url: "1114187845_hellobible-for-3-children/1114187843_12-month-prepay"},
                { price: "391.20", url: "1114188232_hellobible-for-4-children/1114188231_12-month-prepay"},
                { price: "450.00", url: "1114188709_hellobible-for-5-children/1114188708_12-month-prepay"},
                { price: "508.80", url: "1114189029_hellobible-for-6-children/1114189033_12-month-prepay"},
                { price: "567.60", url: "1114189650_hellobible-for-7-children/1114189654_12-month-prepay"},
                { price: "626.40", url: "1114190043_hellobible-for-8-children/1114190042_12-month-prepay"},
                { price: "685.20", url: "1114190339_hellobible-for-9-children/1114190338_12-month-prepay"},
                { price: "744.00", url: "1114186146_hellobible-for-10-children/1114186150_12-month-prepay"}
              ]
            }
        };
    }
  }
})();
