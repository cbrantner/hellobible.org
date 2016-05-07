(function() {
  'use strict';

  angular
    .module('biblebox4kids')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = false;
    toastrConfig.closeButton = true;
  }

})();
