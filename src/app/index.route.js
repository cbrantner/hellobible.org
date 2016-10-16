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
        controllerAs: 'main',
        data : {
          title: 'A Fun Way for Kids to Explore the Bible'
        }
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/privacy/privacy.html',
        controller: 'PrivacyController',
        controllerAs: 'privacy',
        data : {
          title: 'Privacy Policy'
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }
})();
