(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($rootScope, $http, $stateParams) {
    $rootScope.toTheTop();

    var vm = this;

    var url = 'http://localhost:3000/assets/blogdata/';
    if ($stateParams.path) {
      url += $stateParams.path;
    } else {
      url += "/index.html";
    }
     $http.get(url).
      success(function(data, status) {
        vm.duHtmlData = data;
        vm.duStatus = status;
      }).
      error(function(data, status) {
        vm.duData = "not found";
        vm.duStatus = status;
      });
  }
})();

