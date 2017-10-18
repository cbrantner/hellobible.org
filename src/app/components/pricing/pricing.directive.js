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

      //var vm = this;


      $scope.addToCart = function (plan) {

        var selected   = $scope.selectedOptions[plan];
        var planObject = $scope.option[plan];
        var url = planObject.baseUrl + planObject.children[parseInt(selected) - 1].url;

        if (hbTracking) {
          Analytics.trackEvent('cart', 'add', plan, selected);
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
              baseUrl : "https://hellobible.cratejoy.com/ac/CELEBRATE?next=subscribe/",
              children: [
                { price: "24.90", discounted: "19.90", url: "1047510662_hellobible-1-child/1047510663_month-to-month"},
                { price: "29.80", discounted: "24.80", url: "1047516535_hellobible-2-children/1047516536_month-to-month"},
                { price: "34.70", discounted: "29.70", url: "1047517270_hellobible-3-children/1047517266_month-to-month"},
                { price: "39.60", discounted: "34.60", url: "1047517708_hellobible-4-children/1047517704_month-to-month"},
                { price: "44.50", discounted: "39.50", url: "1047518045_hellobible-5-children/1047518046_month-to-month"},
                { price: "49.40", discounted: "44.40", url: "1047518549_hellobible-6-children/1047518550_month-to-month"},
                { price: "54.30", discounted: "49.30", url: "1047518340_hellobible-7-children/1047518341_month-to-month"},
                { price: "59.20", discounted: "54.20", url: "1047518073_hellobible-8-children/1047518075_month-to-month"},
                { price: "64.10", discounted: "59.10", url: "1047517810_hellobible-9-children/1047517811_month-to-month"},
                { price: "69.00", discounted: "64.00", url: "1047517391_hellobible-10-children/1047517392_month-to-month"}
              ]
            },
          sixMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/ac/CELEBRATE6?next=subscribe/",
              children: [
                { price: "143.40", discounted: "113.40", url: "1047510662_hellobible-1-child/1047510665_6-month-prepay"},
                { price: "172.80", discounted: "142.80", url: "1047516535_hellobible-2-children/1047516538_6-month-prepay"},
                { price: "202.20", discounted: "172.20", url: "1047517270_hellobible-3-children/1047517268_6-month-prepay"},
                { price: "231.60", discounted: "201.60", url: "1047517708_hellobible-4-children/1047517706_6-month-prepay"},
                { price: "261.00", discounted: "231.00", url: "1047518045_hellobible-5-children/1047518048_6-month-prepay"},
                { price: "290.40", discounted: "260.40", url: "1047518549_hellobible-6-children/1047518552_6-month-prepay"},
                { price: "319.80", discounted: "289.80", url: "1047518340_hellobible-7-children/1047518344_6-month-prepay"},
                { price: "349.20", discounted: "319.20", url: "1047518073_hellobible-8-children/1047518077_6-month-prepay"},
                { price: "378.60", discounted: "348.60", url: "1047517810_hellobible-9-children/1047517813_6-month-prepay"},
                { price: "408.00", discounted: "378.00", url: "1047517391_hellobible-10-children/1047517394_6-month-prepay"}
              ]
            },
          twelveMonthsPlan:
            {
              baseUrl : "https://hellobible.cratejoy.com/ac/CELEBRATE12?next=subscribe/",
              children: [
                { price: "274.80", discounted: "214.80", url: "1047510662_hellobible-1-child/1047510666_12-month-prepay"},
                { price: "333.60", discounted: "273.60", url: "1047516535_hellobible-2-children/1047516539_12-month-prepay"},
                { price: "392.40", discounted: "332.40", url: "1047517270_hellobible-3-children/1047517269_12-month-prepay"},
                { price: "451.20", discounted: "391.20", url: "1047517708_hellobible-4-children/1047517707_12-month-prepay"},
                { price: "510.00", discounted: "450.00", url: "1047518045_hellobible-5-children/1047518049_12-month-prepay"},
                { price: "568.80", discounted: "508.80", url: "1047518549_hellobible-6-children/1047518553_12-month-prepay"},
                { price: "627.60", discounted: "567.60", url: "1047518340_hellobible-7-children/1047518345_12-month-prepay"},
                { price: "686.40", discounted: "626.40", url: "1047518073_hellobible-8-children/1047518078_12-month-prepay"},
                { price: "745.20", discounted: "685.20", url: "1047517810_hellobible-9-children/1047517814_12-month-prepay"},
                { price: "804.00", discounted: "744.00", url: "1047517391_hellobible-10-children/1047517395_12-month-prepay"}
              ]
            }
        };
    }
  }
})();
