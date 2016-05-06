(function() {
  'use strict';

  angular
    .module('biblebox4kids')
    .directive('acmeHeader', acmeHeader);

  /** @ngInject */
  function acmeHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {
      },
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController($scope, $location, $resource, $anchorScroll, toastr) {

      $scope.scrollTo = function scrollTo(id) {
        $location.hash(id);
        $anchorScroll();
      }

      $scope.addSubscription = function(mailchimp) {

        var url = '//biblebox4kids.us11.list-manage.com/subscribe/post-json';

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
            console.log('MailChimp Error: %o' + error);
          }
        );


      }

    }

  }

})();
