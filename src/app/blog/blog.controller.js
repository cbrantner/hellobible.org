(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('BlogController', BlogController);


  /** @ngInject */
  function BlogController($document, $rootScope, $http, $stateParams, $location, $log) {
    $rootScope.toTheTop();

    var vm = this;

    var url = '/assets/blogdata/';

    if ($stateParams.path) {
      url += $stateParams.path;
    }
    url += "/index.html";
    url = url.replace(/\/\//g, '/');
    
    $http.get(url).
      success(function(data, status) {
        vm.duHtmlData = data;
        vm.duStatus = status;


      }).
      error(function(data, status) {
        vm.duData = "not found";
        vm.duStatus = status;
        $log.debug(url + ': error retrieving data');
      });
  }
})();

