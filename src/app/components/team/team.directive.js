(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeTeam', acmeTeam);

  /** @ngInject */
  function acmeTeam() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/team/team.html',
      scope: {
          
      },
      controller: TeamController,
      controllerAs: 'teamCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TeamController() {

  
    }
  }

})();

