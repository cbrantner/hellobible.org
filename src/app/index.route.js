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
      .state('blogIndex', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'blog',
        data : {
          title: 'Blog'
        }
      })
      .state('blog', {
        url: '/blog/*path', // catch all
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'blog',
        data : {
          title: 'Blog'
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
      })
      .state('families', {
        url: '/families',
        templateUrl: 'app/families/families.html',
        controller: 'FamiliesController',
        controllerAs: 'families',
        data : {
          title: 'HelloBible for Families'
        }
      })
      .state('homeschool', {
        url: '/homeschool',
        templateUrl: 'app/homeschool/homeschool.html',
        controller: 'HomeschoolController',
        controllerAs: 'homeschool',
        data : {
          title: 'HelloBible for Homeschooling'
        }
      })
      .state('boxes', {
        url: '/stories',
        templateUrl: 'app/boxes/boxes.html',
        controller: 'BoxesController',
        controllerAs: 'boxes',
        data : {
          title: 'HelloBible Stories'
        }
      })
      .state('kilgoris', {
        url: '/kilgoris',
        templateUrl: 'app/kilgoris/kilgoris.html',
        controller: 'KilgorisController',
        controllerAs: 'kilgoris',
        data : {
          title: 'The Kilgoris Project'
        }
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }
})();
