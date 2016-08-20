(function() {
  'use strict';

  angular
    .module('hellobible')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
