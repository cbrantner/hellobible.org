(function () {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmePricing', acmePricing)
    .controller('SubscribeModalCtrl', SubscribeModalCtrl);

  /** @ngInject */
  function SubscribeModalCtrl($uibModalInstance, items) {
    var vm = this;

    vm.ok = function () {
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  };


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

      var vm = this;

      $scope.join = function (name, size) {

        // $log.debug(name + ': cart clicked')

        if (hbTracking) {
          // track google analytics event
          Analytics.trackEvent('cart', 'clicked', name);
        }

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'subscribeModal.html',
          controller: 'SubscribeModalCtrl',
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
        gift: {
          name: "Select my gift",
          subtitle: "Give a gift that gives.",
          cancel: "Gift plans do not renew.",
          action: "Select",
          plans: [
            {
              name: "1 Month Gift",
              price: "$29.90",
              donation: "$2",
              image: "/assets/images/pricing/one-month.png",
              bullets: [
                {
                  text: "Gift one month of HelloBible, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$29.90 + $5 shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "$2 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "6 Months Gift",
              price: "$23.90 / box",
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
                  text: "$12 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "12 Months Gift",
              price: "$21.90 / box",
              donation: "$24",
              image: "/assets/images/pricing/twelve-months.png",
              bullets: [
                {
                  text: "Gift one year of HelloBible. Get a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "Gift an additional special gift with the first box. One awesome children Bible to explore even more!",
                  logo: "book fa fa-book"
                },
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
        },
        default: {
          name: "Choose my plan",
          subtitle: "Each box provides education.",
          cancel: "All plans renew automatically. You may cancel anytime.",
          action: "Join",
          plans: [
            {
              name: "Monthly",
              price: "$24.90 / box",
              donation: "$2",
              total: "$262",
              image: "/assets/images/pricing/one-month.png",
              bullets: [
                {
                  text: "Enjoy HelloBible every month. Enjoy a great Bible story, creative craft projects and ideas to share & pray.",
                  logo: "gift glyphicon glyphicon-gift"
                },
                {
                  text: "$24.90/box + $5/box shipping",
                  logo: "tag glyphicon glyphicon-tag"
                },
                {
                  text: "$2 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "6 Months",
              price: "$23.90 / box",
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
                  text: "$12 go to children in Kenya",
                  logo: "heart fa fa-heart"
                }
              ]
            },
            {
              name: "12 Months",
              price: "$21.90 / box",
              donation: "$24",
              image: "/assets/images/pricing/twelve-months.png",
              bullets: [
                {
                  text: "Enjoy one year of HelloBible. Get a great Bible story, creative craft projects and ideas to share &amp; pray.",
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
                  text: "$24 go to children in Kenya",
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
