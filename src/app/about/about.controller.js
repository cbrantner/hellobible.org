(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($rootScope) {
		$rootScope.toTheTop();
  }
})();

