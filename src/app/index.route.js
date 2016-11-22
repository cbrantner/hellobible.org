(function() {
  'use strict';

  angular
    .module('hellobible')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('faq', {
        url: '/faq',
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqController',
        controllerAs: 'land',
        data : {
          title: 'FAQ'
        }
      })
      .state('offer', {
        url: '/launch',
        templateUrl: 'app/land/land.html',
        controller: 'LandController',
        controllerAs: 'land',
        data : {
          title: 'A Fun Way for Kids to Explore the Bible'
        }
      })
      .state('win', {
        url: '/win',
        templateUrl: 'app/win/win.html',
        controller: 'WinController',
        controllerAs: 'win',
        data : {
          title: 'A Fun Way for Kids to Explore the Bible'
        }
      })
      .state('kilgoris', {
        url: '/kilgoris',
        templateUrl: 'app/kilgoris/kilgoris.html',
        controller: 'KilgorisController',
        controllerAs: 'kilgoris',
        data : {
          title: 'A Fun Way for Kids to Explore the Bible'
        }
      })
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
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/terms/terms.html',
        controller: 'TermsController',
        controllerAs: 'terms',
        data : {
          title: 'Terms & Conditions'
        }
      })
      .state('join', {
        url: '/join',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        data : {
          title: 'A Fun Way for Kids to Explore the Bible'
        },
        onEnter: function($location, $anchorScroll) {
          $location.hash('pricing');
          $anchorScroll();
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
        data : {
          title: 'Meet the Founders'
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }
})();
