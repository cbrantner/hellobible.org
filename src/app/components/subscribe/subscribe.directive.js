(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeSubscribe', acmeSubscribe);

  /** @ngInject */
  function acmeSubscribe() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/subscribe/subscribe.html',
      scope: {
        //invokedFrom: '@invoked'
      },
      controller: SubscribeController,
      controllerAs: 'subscribeCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SubscribeController($scope, $location, $resource, $timeout, $anchorScroll, $log, toastr, $window, Analytics, hbTracking) {

      $scope.addSubscription = function(mailchimp) {

      // show spinner while in this function
      $scope.submitting = true;
      $scope.response = false;

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
            if (hbTracking) {
              // track google analytics error
              Analytics.trackException(responseMessage, true);
            }
            toastr.error(responseMessage);
          } else if (response.result === 'success') {
            $scope.response = true;
            $timeout(function() {
              $scope.response = false;
            }, 10000);
            
            if (hbTracking) {
              // track as lead on pinterest
              $window.pintrk('track', 'lead');
              // track google analytics event
              Analytics.trackEvent('newsletter', 'signup', mailchimp.email);
            }
          }
          mailchimp.email = '';
          // disable spinner
          $scope.submitting = false;
        },
        // error
        function () {
          var responseMessage = 'Sorry! An unknown error occured.';
          if (hbTracking) {
            // track google analytics error
            Analytics.trackException("Unknown Mailchimp error", true);
          }
          toastr.error(responseMessage);
          mailchimp.email = '';          
          // disable spinner
          $scope.submitting = false;
        }
      );

    }
  }
}

})();
