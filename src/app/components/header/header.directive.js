(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeHeader', acmeHeader);

  /** @ngInject */
  function acmeHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {
      },
      controller: HeaderController,
      controllerAs: 'headerCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController($scope, $location, $resource, $log, toastr) {

      $scope.addSubscription = function(mailchimp) {

        var url = '//hellobible.us11.list-manage.com/subscribe/post-json';

        var params = {
          u : '241bb925118b3a87d221f6dca',
          id : 'afc638b89c',
          EMAIL : mailchimp.email,
          c : 'JSON_CALLBACK'
        };

        var actions = {
          'save': {
            method: 'jsonp'
          }
        };

        var MailChimpSubscription = $resource(url, params, actions);

        MailChimpSubscription.save(

          function (response) {
              var responseMessage = '';

              if (response.result === 'error') {
                if (response.msg) {
                  // Remove error numbers, if any.
                  var errorMessageParts = response.msg.split(' - ');
                  if (errorMessageParts.length > 1) {
                    errorMessageParts.shift(); // Remove the error number
                  }
                  responseMessage = errorMessageParts.join(' ');
                } else {
                  responseMessage = 'Sorry! An unknown error occured.';
                }
                toastr.error(responseMessage);
              } else if (response.result === 'success') {
                toastr.info(response.msg);
              }
              mailchimp.email = '';
          },

          function (error) {
            $scope.responseMessage = 'Sorry! An unknown error occured.';
            $log.error('MailChimp Error: ' + error);
          }
        );


      }

    }

  }

})();
