(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {

    angular.element('#portfolio-carousel').owlCarousel(
      {
        autoplay: true,
        autoplaySpeed: 1000,
        items: 2,
        margin: 2,
        loop: true,
        stagePadding: 70,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }

      });
  }
})();
