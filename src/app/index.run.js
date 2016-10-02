(function() {
  'use strict';

  angular
    .module('hellobible')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $document, SCROLL_DURATION) {
		$rootScope.toTheTop = function() {
      $document.scrollTopAnimated(10, SCROLL_DURATION)
    }
  }

})();
