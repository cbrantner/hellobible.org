(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController)
    .controller('SignupModalController', SignupModalController);

  /** @ngInject */
  function SignupModalController($uibModalInstance) {
    
    var vm = this;

    vm.ok = function () {
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }


  /** @ngInject */
  function MainController($location, $anchorScroll, $uibModal, Analytics, hbTracking) {

    var vm = this;

    vm.info = undefined;
    vm.infoObject = undefined;

    vm.options = [
      {
        id : "envelope",
        name : "Basic Pack",
        titleImage : "/assets/images/info/envelope.png",
        carousel : [
          {
            image : "envelope-content",
            title : "Crafts, instructions and ideas to share &amp; pray."
          },
          {
            image : "read",
            title : "Read a wonderful Bible story together."
          },
          {
            image : "play",
            title : "Play an awesome matching game. Help Noah to bring two of all the animals into the Ark."
          }
        ],
        title : "HelloBible Basic Pack",
        text : '<p><b>A fun activity to explore a Bible Story each month</b>.</p>' +
							'<p><span class="text-read">Read</span> an age-appropriate Bible Story Book and <span class="text-create">create</span> a wonderful craft to enlarge upon the Bible story.' +
								'<span class="text-pray">Share and pray</span> together.' +
							'</p>'
      }, {
        id : "premium",
        name : "Premium Box",
        titleImage : "/assets/images/how-image1-s.jpg",
        carousel : [
          {
            image : "premium-content",
            title : "Crafts, instructions and ideas to share &amp; pray."
          },
          {
            image : "craft",
            title : "Build Noah's Ark."
          },
          {
            image : "bubble",
            title : "Have fun with giant rainbow bubbles."
          }
        ],
        title : "HelloBible Premium Box",
        text : '<p><b>A fun curriculum for the entire month</b>.</p>' +
							'<p><span class="text-read">Read</span> an age-appropriate Bible Story Book and <span class="text-create">create</span> two wonderful crafts to dig deep into the Bible story. Enjoy high quality family time by <span class="text-pray">sharing and praying</span> ' +
              'together.' +
							'</p>'
      }
    ];

    vm.slickConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      //arrows: true,
      //infinite: true,
      slidesToShow: 1,
      adaptiveHeight: false,
      arrows: true
      //centerMode: true,
      //centerPadding: '70px',
    }

    vm.signup = function (name, size) {

      // $log.debug(name + ': cart clicked')

      if (hbTracking) {
        // track google analytics event
        Analytics.trackEvent('newsletter', 'openModal', name);
      }

      vm.showNotificationBar = false;

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'signupModal.html',
        controller: 'SignupModalController',
        controllerAs: 'vm',
        size: size,
        resolve: {
          items: function () {
            return name;
          }
        }
      });

      modalInstance.result.then(function () {
        // ok clicked
      }, function () {
        // cancel clicked
      });
    };

    vm.showInfo = function(name) {
      if (vm.info == name) {
        vm.info = undefined;
        vm.infoObject = undefined;
      } else {
        vm.info = name;
        vm.infoObject = vm.options.find(function(x) { return x.id == name;});
        if (hbTracking) {
           // track google analytics event
          Analytics.trackEvent('information', 'showInfo', name);
        }
      }
    }
  }

})();
