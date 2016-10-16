(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(config)
		.value('duScrollOffset', 30)
		.value('duScrollDuration', 500);

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

    // lightbox is used for showing big images in carousel
    lightbox.option({
      'resizeDuration': 300,
      'showImageNumberLabel' : false,
      'alwaysShowNavOnTouchDevices' : true,
      'wrapAround' : true
    })

  }
})();
