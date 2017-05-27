(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('MainController', MainController)
    .controller('SignupModalController', SignupModalController)
    .controller('VideoModalController', VideoModalController);

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
  function VideoModalController($uibModalInstance) {
    
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

    vm.how = [
      {
        image : "/assets/images/how-image1",
        heading : "1. Pick your subscription!",
        text : "<b>Order</b> a charming box of quality activities each month. Kids love to receive mail.",
        button : "Order Now",
        link : "#pricing"
      },
      {
        image : "/assets/images/how-image2",
        heading : "2. Read, create, share & pray!",
        text : "<b>Dig deeper</b> into a Bible story with reading, keepsake crafts and ideas for discussion and prayer.",
        button : "Explore Past Boxes",
        link : "/blog/categories/past-boxes"
      },
      {
        image : "/assets/images/how-image3",
        heading : "3. Spread God's love!",
        text : "<b>We donate</b> to The Kilgoris Project. Learn about the importance of giving.",
        button : "The Kilgoris Project",
        link : "/blog/categories/kilgoris"
      }
    ];

    vm.options = [
      {
        id : "premium",
        name : "Premium Box",
        titleImage : "/assets/images/info/premium.jpg",
        ribbon : "Full Curriculum",
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
          },
          {
            image : "testimonial",
            title : "What our customers say."
          },
          {
            image : "easter_premium",
            title : "Content of the Easter Box."
          }
        ],
        title : "HelloBible Premium Box",
        text : '<p><span class="text-read">Read</span> an age-appropriate Bible Story Book and <span class="text-create">create</span> two wonderful crafts to deepen the understanding of the Bible story. Enjoy high quality family time. <span class="text-pray">Share and pray</span> ' +
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

    vm.showVideo = function (size) {

      // $log.debug(name + ': cart clicked')

      if (hbTracking) {
        // track google analytics event
        Analytics.trackEvent('video', 'show');
      }

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'videoModal.html',
        controller: 'VideoModalController',
        controllerAs: 'vm',
        size : size
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
      } else {
        vm.info = name;
        if (hbTracking) {
           // track google analytics event
          Analytics.trackEvent('information', 'showInfo', name);
        }
      }
    }
  }

})();
