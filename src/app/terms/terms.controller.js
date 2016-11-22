(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('TermsController', TermsController);

  /** @ngInject */
  function TermsController($rootScope) {
		$rootScope.toTheTop();
  }
})();

