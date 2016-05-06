(function() {
  'use strict';

  angular
    .module('biblebox4kids')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
