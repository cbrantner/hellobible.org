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
  function MainController($location, $anchorScroll, $uibModal, Analytics, hbTracking, $window) {

    var vm = this;

    vm.info = undefined;

    vm.options = [
      {
        id: "families",
        name: "Families",
        titleImage: "/assets/images/info/families.jpg",
        carousel: [
          {
            image: "noah-box",
            title: "The Story of Noah. Help Noah to bring two of all the animals into the Ark."
          },
          {
            image: "bubble",
            title: "Enjoy giant rainbow bubbles. Remember the promise God gave to Noah."
          },
          {
            image: "david",
            title: "Receive materials for up to 4 kids."
          },
          {
            image: "david-aim",
            title: "Try to aim like David."
          },
          {
            image: "daniel",
            title: "The Story of Daniel. Learn how God protected Daniel, when he was thrown into the lions' den."
          },
          {
            image: "daniel-lion",
            title: "Tie a lion pillow and be reminded to be brave like Daniel."
          }
        ],
        title: "1 Box/Month: Materials for Up to 4 Kids Ages 5+.",
        subtitle: "Ready to start Your Journey?",
        bullets: [
          {
            icon: "fa-book",
            title: "Bible Storybook",
            text: "Read and enjoy one Bible Story each month."
          },
          {
            icon: "fa-comments",
            title: "Lesson Plans",
            text: "Thoughtful guides and fun family activities to dig deeper into the story."
          },
          {
            icon: "fa-paint-brush",
            title: "Keepsake Art Projects",
            text: "Story-focused keepsake crafts. High-quality materials and attractive instructions for assembly."
          },
          {
            icon: "fa-suitcase",
            title: "Bible Travel Journal",
            text: "Story coloring, activity sheets and memory verses."
          }
        ]
      }, {
        id: "schools",
        name: "Homeschooling",
        titleImage: "/assets/images/info/homeschool.jpg",
        carousel: [
          {
            image: "david-box",
            title: "The Story of David."
          },
          {
            image: "david-sheep",
            title: "Create keepsake crafts: play Tic-Tac-Toe with a flock of sheep ."
          },
          {
            image: "david-sling",
            title: "Create and play an awesome aiming game."
          },
          {
            image: "david-aim",
            title: "Practice aiming like David."
          }
        ],
        title: "A Fun Bible & Art Curriculum - Grades K-3",
        subtitle: "Ready to start the Journey?",
        bullets: [
          {
            icon: "fa-book",
            title: "Bible Storybook",
            text: "Read and enjoy a Bible Story."
          },
          {
            icon: "fa-comments",
            title: "Lesson Plans",
            text: "Thoughtful lesson plans and fun activities to dig deeper into the story."
          },
          {
            icon: "fa-paint-brush",
            title: "Art Projects",
            text: "Story-focused keepsake crafts. High-quality materials and attractive instructions for assembly."
          },
          {
            icon: "fa-suitcase",
            title: "Bible Travel Journal",
            text: "Story coloring, activity sheets and memory verses."
          }
        ]
      }
    ];

    vm.slickConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      mobileFirst: true,
      arrows: false
    };

    vm.slickProductConfig = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            autoplay: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
            autoplay: false
          }
        }
      ]
    };

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

      if (hbTracking) {
        Analytics.trackEvent('video', 'show');
        $window.fbq('track', 'ViewContent', {
          content_name: 'Video',
          content_id: 'UnboxingVideo'
        });
      }

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'videoModal.html',
        controller: 'VideoModalController',
        controllerAs: 'vm',
        size: size
      });

      modalInstance.result.then(function () {
        // ok clicked
      }, function () {
        // cancel clicked
      });
    };
  }

})();
