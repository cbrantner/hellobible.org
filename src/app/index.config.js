(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, laddaProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-top-left';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = false;
    toastrConfig.closeButton = true;

    laddaProvider.setOption({
      style: 'slide-right',
      spinnerSize: 40,
      spinnerColor: '#ffffff'
    });
  }

})();
