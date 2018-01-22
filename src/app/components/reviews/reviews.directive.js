(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeReviews', acmeReviews);

  /** @ngInject */
  function acmeReviews() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/reviews/reviews.html',
      controller: ReviewsDirController,
      controllerAs: 'ReviewsDirCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ReviewsDirController() {

    }
  }

})();

