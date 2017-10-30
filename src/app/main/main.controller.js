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
        image : "/assets/images/why-image1",
        text : "Grow",
        quote : "I loved it! I like that Jesus is tied into every story. This is a great way to point children to The Savior.",
        name : "Bethany",
        title : "Mom of 2"
      },
      {
        image : "/assets/images/why-image2",
        text : "Engage",
        quote : "Discussion questions encourage children to reflect on their own experiences with promises, safety and trusting God.",
        name : "Maria",
        title : "Founder of <a href='http://kindercraze.com/meet-hellobible-christian-subscription-box-kids/'>Kinder Craze</a>"
      },
      {
        image : "/assets/images/why-image3",
        text : "Create",
        quote : "Very appealing, high-quality materials and keepsake crafts. My daughter really liked the story book and the fun mix of activities.",
        name : "Tenny",
        title : "Homeschooling mom of 3"
      },
      {
        image : "/assets/images/why-image4",
        text : "Convenient",
        quote : "I like that everything is there. We are busy all week, it is great to have the pre-made box that puts it all together.",
        name : "Sarah",
        title : "Working mom of 2"
      }
    ];

    vm.options = [
      {
        id : "families",
        name : "Families",
        titleImage : "/assets/images/info/families.jpg",
        carousel : [
          {
            image : "noah-box",
            title : "The Story of Noah. Help Noah to bring two of all the animals into the Ark."
          },
          {
            image : "david",
            title : "Receive materials for up to 10 kids. Try to aim like David."
          },
          {
            image : "christmas",
            title : "Build a wonderful nativity scene and a Christmas light to remember that Jesus is the light of the world."
          },
          {
            image : "bubble",
            title : "Enjoy giant rainbow bubbles. Remember the promise God gave to Noah."
          }
        ],
        title : "1 Box/Month: Materials for Up to 10 Kids Ages 5+.",
        subtitle: "Ready to start Your Journey?",
        bullets: [
          {
            icon : "fa-book",
            title : "Bible Storybook",
            text : "Read and enjoy one Bible Story each month."
          },
          {
            icon : "fa-comments",
            title : "Lesson Plans",
            text : "Thoughtful guides and fun family activities to dig deeper into the story."
          },
          {
            icon : "fa-paint-brush",
            title : "Keepsake Art Projects",
            text : "Story-focused keepsake crafts. High-quality materials and attractive instructions for assembly."
          },
          {
            icon : "fa-suitcase",
            title : "Bible Travel Journal",
            text : "Story coloring, activity sheets and memory verses."
          }
        ]
      }, {
        id : "schools",
        name : "Homeschooling",
        titleImage : "/assets/images/info/homeschool.jpg",
        carousel : [
          {
            image : "david-box",
            title : "The Story of David."
          },
          {
            image : "david-sheep",
            title : "Create keepsake crafts: play Tic-Tac-Toe with a flock of sheep ."
          },
          {
            image : "david-sling",
            title : "Create and play an awesome aiming game."
          },
          {
            image : "david-aim",
            title : "Practice aiming like David."
          }
        ],
        title : "A Fun Bible & Art Curriculum - Grades K-3",
        subtitle: "Ready to start the Journey?",
        bullets: [
          {
            icon : "fa-book",            
            title : "Bible Storybook",
            text : "Read and enjoy a Bible Story."
          },
          {
            icon : "fa-comments",            
            title : "Lesson Plans",
            text : "Thoughtful lesson plans and fun activities to dig deeper into the story."
          },
          {
            icon : "fa-paint-brush",            
            title : "Art Projects",
            text : "Story-focused keepsake crafts. High-quality materials and attractive instructions for assembly."
          },
          {
            icon : "fa-suitcase",            
            title : "Bible Travel Journal",
            text : "Story coloring, activity sheets and memory verses."
          }
        ]
      }
    ];

    vm.slickConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      //arrows: true,
      //infinite: true,
      slidesToShow: 1,
      mobileFirst: true,
      arrows: false
      //centerMode: true,
      //centerPadding: '70px',
    }

    vm.testimonialConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      mobileFirst: true,
      arrows: false
      
    }

    vm.howConfig = {
      dots: true,
      autoplay: false,
      autoplaySpeed: 2500,
      mobileFirst: true,
      arrows: false
      
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
