(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController() {

    var vm = this;

    vm.menuStatus = [
      { isOpen : true     },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    },
      { isOpen : false    }
    ];

  }
})();
