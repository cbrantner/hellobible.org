(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider, $windowProvider) {
    var $window = $windowProvider.$get();

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

      .state('inside', {
        url: '/inside-a-box',
        templateUrl: 'app/inside/inside.html',
        controller: 'InsideController',
        controllerAs: 'inside',
        onEnter: function() {
            // facebook
            $window.fbq('track', "ViewContent");
            // pinterest
            $window.pintrk('track', 'pagevisit');
        },
        data : {
          title: 'Sample Boxes'
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
