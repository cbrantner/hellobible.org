(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeSocial', acmeSocial);

  /** @ngInject */
  function acmeSocial() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/social/social.html',
      scope: {
          
      },
      controller: SocialController,
      controllerAs: 'socialCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SocialController() {

  
    }
  }

})();

