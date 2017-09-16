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
        text : "<b>EXPLORE</b> Bible-based and Christ-centered learning.",
        quote : "I loved it! I like that Jesus is tied into every story. This is a great way to point children to The Savior.",
        name : "Bethany",
        title : "Sunday school teacher and mom of 2"
      },
      {
        image : "/assets/images/how-image2",
        text : "<b>ENJOY</b> child-friendly instructions and thoughtful teaching guides.",
        quote : "The unique crafts also come with clear, attractive directions for assembly (which makes my teacher heart go pitter-patter). Noah’s Ark box also had thoughtful faith formation opportunities and discussion questions.",
        name : "Maria",
        title : "Kindergarten teacher and founder of <a href='http://kindercraze.com/meet-hellobible-christian-subscription-box-kids/'>Kinder Craze</a>"
      },
      {
        image : "/assets/images/how-image3",
        text : "<b>CREATE</b> keepsake crafts and fun activities.",
        quote : "Very appealing, high-quality materials and keepsake crafts. My 7 year old daughter really liked the story book and the fun mix of activities.",
        name : "Tenny",
        title : "Homeschooling mom of 3"
      },
      {
        image : "/assets/images/how-image3",
        text : "It is <b>CONVENIENT</b>. All Materials are included and delivered.",
        quote : "I like that everything is there, I don’t have to go to the store. We are busy all week, it is great to have the pre-made box that puts it all together.",
        name : "Sarah",
        title : "Working mom of 2"
      }
    ];

    vm.options = [
      {
        id : "families",
        name : "Families",
        titleImage : "/assets/images/info/envelope.jpg",
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
          },
          {
            image : "testimonial",
            title : "What our customers say."
          },
          {
            image : "easter_pack",
            title : "Content of the Easter Pack."
          }
        ],
        title : "You get one HelloBible Box/month. Great for Kids Ages 5+.",
        subtitle: "Ready to start Your Journey?",
        bullets: [
          {
            title : "Bible Storybook.",
            text : "Read and enjoy one Bible Story each month."
          },
          {
            title : "Parent Guides",
            text : "Thoughtful guides and fun family activities to dig deeper into the story."
          },
          {
            title : "Creative Projects",
            text : "Story-focused keepsake crafts. High-quality material and attractive instructions for assembly."
          },
          {
            title : "Kids Bible Journal",
            text : "Story coloring, activity sheets and memory verses."
          }
        ]
      }, {
        id : "schools",
        name : "Sunday Schools & Homeschooling",
        titleImage : "/assets/images/info/premium.jpg",
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
        title : "You Get a Fun Curriculum for Grades K-3",
        subtitle: "Ready to start the Journey?",
        bullets: [
          {
            title : "Bible Storybook",
            text : "Read and enjoy a Bible Story."
          },
          {
            title : "Lesson Guides",
            text : "Thoughtful lesson guides and fun activities to dig deeper into the story."
          },
          {
            title : "Creative Projects",
            text : "Story-focused keepsake crafts. High-quality material and attractive instructions for assembly."
          },
          {
            title : "Kids Bible Journal",
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
      adaptiveHeight: false,
      arrows: true
      //centerMode: true,
      //centerPadding: '70px',
    }

    vm.testimonialConfig = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      mobileFirst: true
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
