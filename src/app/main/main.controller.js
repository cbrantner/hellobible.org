(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController)
    .controller('PortfolioController', PortfolioController)
    .controller('SignupModalController', SignupModalController);

  /** @ngInject */
  function SignupModalController($uibModalInstance) {
    var vm = this;

    vm.ok = function () {
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }


  /** @ngInject */
  function MainController($scope, $uibModal, Analytics, hbTracking) {

    $scope.signup = function (name, size) {

      // $log.debug(name + ': cart clicked')

      if (hbTracking) {
        // track google analytics event
        Analytics.trackEvent('newsletter', 'click', name);
      }

      $scope.showNotificationBar = false;

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'signupModal.html',
        controller: 'SignupModalController',
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
  }

  /** @ngInject */
  function PortfolioController() {
    var vm = this;
    vm.slickConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '70px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  }
})();
