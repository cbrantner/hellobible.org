(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('inside', {
        url: '/inside-a-box',
        templateUrl: 'app/inside/inside.html',
        controller: 'InsideController',
        controllerAs: 'inside'
      })

      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/privacy/privacy.html',
        controller: 'PrivacyController',
        controllerAs: 'privacy'
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }
})();
