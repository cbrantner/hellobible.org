(function() {
  'use strict';

  angular
    .module('hellobible')
    .directive('acmeTestimonials', acmeTestimonials);

  /** @ngInject */
  function acmeTestimonials() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/testimonials/testimonials.html',
      controller: TestimonialsDirController,
      controllerAs: 'testimonialsDirCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TestimonialsDirController($scope) {

      $scope.slideConfig = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        mobileFirst: true,
        arrows: false
      }

      $scope.why = [
        {
          image : "/assets/images/why-image1",
          text : "Grow",
          quote : "I loved it! I like that Jesus is tied into every story. This is a great way to point children to The Savior.",
          name : "Bethany",
          title : "Mom of 2",
          link: "home({'#' : 'pricing'})",
          button: "Order Now"
        },
        {
          image : "/assets/images/why-image2",
          text : "Engage",
          quote : "Discussion questions encourage children to reflect on their own experiences with promises, safety and trusting God.",
          name : "Maria",
          title : "Founder of <a href='http://kindercraze.com/meet-hellobible-christian-subscription-box-kids/'>Kinder Craze</a>",
          link: "home({'#' : 'how'})",
          button: "How it Works"
        },
        {
          image : "/assets/images/why-image3",
          text : "Create",
          quote : "Very appealing, high-quality materials and keepsake crafts. My daughter really liked the story book and the fun mix of activities.",
          name : "Tenny",
          title : "Homeschool Mom of 3",
          link: "home({'#' : 'pricing'})",
          button: "Order Now"
        },
        {
          image : "/assets/images/why-image4",
          text : "Convenient",
          quote : "I like that everything is there. We are busy all week, it is great to have the pre-made box that puts it all together.",
          name : "Sarah",
          title : "Working Mom of 2",
          link: "stories",
          button: "Peek Inside"
        }
      ];  
    }
  }

})();

