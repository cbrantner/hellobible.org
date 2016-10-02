(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('PrivacyController', PrivacyController);

  /** @ngInject */
  function PrivacyController($rootScope) {
		$rootScope.toTheTop();
  }
})();

