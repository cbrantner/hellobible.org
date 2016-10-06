/*eslint no-unused-vars: 0 */
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
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.title = toState.data.title;
    });
  }

})();
