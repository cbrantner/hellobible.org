'use strict';

/**
 * @ngdoc overview
 * @name biblebox4kidscomApp
 * @description
 * # biblebox4kidscomApp
 *
 * Main module of the application.
 */
angular
  .module('biblebox4kidscomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/thanks', {
        templateUrl: 'views/thanks.html',
        controller: 'ThanksCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
