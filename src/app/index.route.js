(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('anchor', {
        url: '/home/:location/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/privacy/privacy.html',
        controller: 'PrivacyController',
        controllerAs: 'privacy'
      });
      $urlRouterProvider.otherwise('/home');
      $locationProvider.html5Mode(true);
  }
})();
