(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeTestimonials', acmeTestimonials);

  /** @ngInject */
  function acmeTestimonials() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/testimonials/testimonials.html',
      scope: {
          
      },
      controller: TestimonialsController,
      controllerAs: 'testimonialsCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TestimonialsController() {

  
    }
  }

})();

