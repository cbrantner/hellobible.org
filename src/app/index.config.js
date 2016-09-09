(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, laddaProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options for toaster notifications
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-top-left';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = false;
    toastrConfig.closeButton = true;

    // Spinning wheel for subscribe button
    laddaProvider.setOption({
      style: 'slide-right',
      spinnerSize: 40,
      spinnerColor: '#ffffff'
    });
  }

})();
