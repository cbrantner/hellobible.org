(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('HomeschoolController', HomeschoolController);


  /** @ngInject */
  function HomeschoolController() {

    var vm = this;    

    vm.slickConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      centerMode: true,
      centerPadding: '70px',

      mobileFirst: true
    }

  }
  
})();
