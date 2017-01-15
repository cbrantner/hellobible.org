(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($rootScope, $http, $stateParams, $log) {
    $rootScope.toTheTop();

    var vm = this;

    var url = '/assets/blogdata';
    if ($stateParams.path) {
      url += "/" + $stateParams.path;
    }
    url += "/index.html";
    $log.debug('url ' + url);
    $http.get(url).
      success(function(data, status) {
        vm.duHtmlData = data;
        vm.duStatus = status;
        $log.debug('success retrieving data');
      }).
      error(function(data, status) {
        vm.duData = "not found";
        vm.duStatus = status;
        $log.debug('error retrieving data');
      });
  }
})();

