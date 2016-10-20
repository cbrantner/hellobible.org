(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController)
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function MainController() {
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
