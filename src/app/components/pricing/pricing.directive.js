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

      $scope.opened = function (plan) {
        if (hbTracking) {
          Analytics.trackEvent('cart', 'openGroup', plan);
        }
      }

      $scope.addToCart = function (url, product) {

        if (hbTracking) {
          Analytics.trackEvent('cart', 'add', product);
        }

        // redirect
        $window.location.href = url;
      }

      $scope.join = function (name, size) {

        // $log.debug(name + ': cart clicked')

        if (hbTracking) {
          // track google analytics event
          Analytics.trackEvent('cart', 'openCart', name);
        }

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'subscribeModal.html',
          controller: 'SubscribeModalController',
          controllerAs: 'vm',
          size: size,
          resolve: {
            items: function () {
              return name;
            }
          }
        });

        modalInstance.result.then(function () {
          // ok clicked
        }, function () {
          // cancel clicked
        });
      };

      $scope.checkBoxValue = "default";

      $scope.option =
        {
          id : "premium",
          name: "Premium Box",
          titleImage : "premium-box.png",
          subtitle: "Each box provides education for children in Kenya.",
          plans: [
            {
              name: "Monthly",
              price: "$24.90/box",
              donation: "$2",
              total: "$262",
              productUrl: "https://hellobible.cratejoy.com/subscribe/536459466_HelloBible+Box/536459468_month-to-month",
              bullets: [
                {
                  text: "$24.90/box + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "$2/box go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "6 Months",
              price: "$23.90/box",
              donation: "$12",
              productUrl: "https://hellobible.cratejoy.com/subscribe/536459466_HelloBible+Box/536459470_6-month-prepay",
              bullets: [
                {
                  text: "$143 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "$12 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "12 Months",
              price: "$21.90/box",
              donation: "$24",
              productUrl: "https://hellobible.cratejoy.com/subscribe/536459466_HelloBible+Box/536459471_12-month-prepay",
              bullets: [
                {
                  text: "$262 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "$24 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            }
          ]
        };
    }
  }
})();
