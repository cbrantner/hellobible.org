(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    angular.element('#portfolio-carousel').owlCarousel();
  }
})();
