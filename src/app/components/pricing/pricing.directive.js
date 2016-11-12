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
    function PricingController($scope, $uibModal, $log, Analytics, hbTracking) {

      //var vm = this;

      $scope.opened = function (plan) {
        if (hbTracking) {
          Analytics.trackEvent('cart', 'openGroup', plan);
        }
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

      $scope.options = {
        snipcartUrl : "/",
        gift: {
          name: "Select my gift",
          subtitle: "Give a gift that provides education for children in Kenya.",
          cancel: "Gift subscriptions do not renew.",
          action: "Select",
          plans: [
            {
              snipcartId : "1",
              snipcartName : "1 Month Gift",
              snipcartPrice : "29.90",
              snipcartDescription : "1 Month Gift",
              name: "1 Month Gift",
              price: "$29.90",
              donation: "$2",
              image: "/assets/images/pricing/one-month.png",
              bullets: [
                {
                  text: "Gift one month of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$29.90 + $5 shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              snipcartId : "2",
              snipcartName : "6 Months Gift",
              snipcartPrice : "143",
              snipcartDescription : "6 Months Gift",
              name: "6 Months Gift",
              price: "$23.90/box",
              donation: "$12",
              image: "/assets/images/pricing/six-months.png",
              bullets: [
                {
                  text: "Gift 6 months of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$143 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              snipcartId : "3",
              snipcartName : "12 Months Gift",
              snipcartPrice : "262",
              snipcartDescription : "12 Months Gift",
              name: "12 Months Gift",
              price: "$21.90/box",
              donation: "$24",
              image: "/assets/images/pricing/twelve-months.png",
              bullets: [
                {
                  text: "Gift one year of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "Your giftee also receives an awesome children's Bible to explore even more!",
                  logo: "book fa fa-book"
                },
                {
                  text: "$262 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            }
          ]
        },
        default: {
          name: "Choose my plan",
          subtitle: "Each box provides education for children in Kenya.",
          cancel: "All subscriptions renew automatically. You may cancel anytime.",
          action: "Join",
          plans: [
            {
              snipcartId : "4",
              snipcartName : "Monthly Subscription",
              snipcartPrice : "24.90",
              snipcartDescription : "Monthly Subscription",
              name: "Monthly",
              price: "$24.90/box",
              donation: "$2",
              total: "$262",
              image: "/assets/images/pricing/one-month.png",
              bullets: [
                {
                  text: "Enjoy HelloBible every month. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$24.90/box + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              snipcartId : "5",
              snipcartName : "6 Months Subscription",
              snipcartPrice : "143",
              snipcartDescription : "6 Months Subscription",
              name: "6 Months",
              price: "$23.90/box",
              donation: "$12",
              image: "/assets/images/pricing/six-months.png",
              bullets: [
                {
                  text: "Enjoy 6 months of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$143 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              snipcartId : "6",
              snipcartName : "12 Months Subscription",
              snipcartPrice : "262",
              snipcartDescription : "12 Months Subscription",
              name: "12 Months",
              price: "$21.90/box",
              donation: "$24",
              image: "/assets/images/pricing/twelve-months.png",
              bullets: [
                {
                  text: "Enjoy one year of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "Receive a special gift in your first box. One awesome children Bible to explore even more!",
                  logo: "book fa fa-book"
                },
                {
                  text: "$262 + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "10% go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            }
          ]
        }
      }
    }
  }
})();
