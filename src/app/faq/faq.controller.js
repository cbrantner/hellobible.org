(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController($scope) {

    $scope.menuStatus = [
      { isOpen : true     },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    }
    ];

  }
})();
