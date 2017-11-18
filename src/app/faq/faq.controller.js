(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController(Analytics, hbTracking) {

    var vm = this;

    vm.faq = [
      {
        name: "General",
        id: "general",
        items: [
          {
            title: "What is HelloBible?",
            answer: ["HelloBible is a monthly christian subscription for kids ages 5 and older. Its content is a thoughtfully designed Bible and art curriculum meant to help kids understand God's Word and draw them closer to the Lord. It is ideal for families and homeschooling families to explore a Bible story each month through multisensory learning, art projects and fun activities. All materials and instructions are included. Join us on a great Journey through the Bible."]
          },
          {
            title: "What is included?",
            answer: [
              "It comes with a Bible storybook, engaging lesson plans and multidisciplinary activities to dig deeper into the content of a Bible story. All materials for amazing bible-based art projects are included. Our Bible explorers can use the included Travel Journal to collect story coloring and activity sheets."
            ]
          },
          {
            title: "What is the suggested age range for HelloBible?",
            answer: ["HelloBible is designed for kids ages 5 and older. The curriculum is for grades K - 3."]
          },
          {
            title: "Does HelloBible align with my beliefs?",
            answer: ["Our content is Bible based. We focus on Scripture and we share suggestions on how to teach Bible Stories to children. We hope that those ideas and suggestions apply to a broad range of christian families and homeschool groups. If you have any questions please do not hesitate to contact us."]
          },
          {
            title: "Who is Danny the Donkey?",
            answer: ["Danny the Donkey is our little helper who takes the kids on their journey through the Bible. He welcomes, explains the crafts and knows a lot of great Bible Verses.",
              "Donkeys are humble and often serving behind the scenes. In the Bible donkeys are constantly mentioned and considered reliable helpers to the humans. The New Testament tells us that Jesus entered Jerusalem on a donkey while the crowd worshipped him. Why did Jesus ride on an unimportant donkey instead of a mighty horse in such an important occasion? This shows that Jesus is a humble king, nobody needs to be perfect in order to serve Jesus. Let's all be reminded by Danny the Donkey, that we are important to Jesus and that he wants to use us."]
          },
          {
            title: "Is HelloBible donating?",
            answer: ["Yes. We personally know the founders of The Kilgoris Project and started an awesome partnership with them to support their great work in Kenya. The Kilgoris Project educates and feeds children of a Masaai village in southwest Kenya. They work with local leaders and families to operate schools, provide daily food and clean water.",
              "For each HelloBible subscription, we donate to The Kilgoris Project. Teach your child the importance of giving: Together we can make a difference in the life of a child in Kilgoris! "]
          },
          {
            title: "How can I support HelloBible?",
            answer: ["Thanks for your interest in HelloBible. There are many ways to support us: <ul>" +
              "<li>Pray for us.</li>" +
              "<li>Tell your family, friends, your church about HelloBible.</li>" +
              "<li>Share us on <a href='https://www.facebook.com/hellobible.org/'>Facebook</a>, <a href='http://www.instagram.com/hellobiblebox/'>Instagram</a>, or <a href='http://www.pinterest.com/hellobible'>Pinterest</a>.</li>"
              ]
          },
          {
            title: "How does it work for multiple children?",
            answer : ["During the checkout process, your can select the number of material sets you want - one for each child."]
          },
          {
            title: "Why is Hellobible great for homeschooling?",
            answer: ["<ul>" +
              "<li><b>Multi-sensory</b>: Read Bible Stories. Create hands-on crafts. Engage in fun activities.</li>" +
              "<li><b>Multi-disciplinary</b>: Combine Bible and Art. Both often fall short in a performance-oriented education.</li>" +
              "<li><b>Convenient: All</b> materials are included. For up to 10 children.</li>" +
              "<li><b>Easy to teach</b>: Thoughtful lesson plans and child-friendly instructions are included.</li>" +
              "<li><b>Keepsake projects:</b> Always be reminded that you are a child of God.</li>" +
              "<li><b>Giving and compassion</b>: Support children in Kenya.</li>"
            ]
          },
          {
            title: "What if I need material for more than 10 children?",
            answer: ["That's great. No problem. Please contact us at info@hellobible.org and we will be happy to help you."]
          },
          {
            title: "How can I give feedback?",
            answer: ["We love to hear from you! Please send us an email to info@hellobible.org."]
          }
        ]},
        {
        name: "Subscription",
        id: "subscription",
        items: [
          {
            title: "How does the monthly subscription work?",
            answer: ["When you sign up for a monthly subscription, you will get one HelloBible shipment each month. You will be billed on the 1st of each month and can cancel at any time."]
          },
          {
            title: "How does the 6 or 12 months subscription work?",
            answer: ["When you sign up for a 6 or 12 months subscription, you will get one HelloBible shipment each month for the duration of your subscription. You will pay for the entire subscription upfront. The subscriptions will renew automatically."]
          },
          {
            title: "What happens at the end of my subscription?",
            answer: ["Subscriptions will automatically renew at the end of the subscription period. That's great because you will never miss out! We will send you a reminder email one day before the automatic renewal. If you do not cancel after receiving the reminder email, it will renew for the same number of months as the term that was originally purchased."]
          },
          {
            title: "How can I give HelloBible as a gift?",
            answer: ["HelloBible™ is a wonderful gift! During the checkout, please provide your gift recipient’s name and address in the shipping section at checkout. You can also leave a personalized note for the recipient."]
          },
          {
            title: "Do you accept returns?",
            answer: ["HelloBible shipments are not returnable or refundable. However, if any materials are missing or damaged please contact us at info@hellobible.org. We will be happy to replace those."]
          },
          {
            title: "What if there is a problem with my order?",
            answer: ["We want all customers to enjoy HelloBible. If there is any problem, please contact us at info@hellobible.org."]
          },
          {
            title: "How can I cancel a subscription?",
            answer: ['If, for any reason, you decided to leave us, you can cancel your subscription in your <a href="http://hellobible.cratejoy.com/customer/login">account</a>. Please note, subscriptions can’t be canceled mid-term. All Cancellations need to be received one day before the automatic renewal which generally is the 1st of each month.']
          }
        ]
      }, {
        name: "Shipping",
        id: "shipping",
        items: [
          {
            title: "Where does HelloBible ship?",
            answer: ["We ship anywhere in the United States, including Hawaii and Alaska. If you’d like us to ship abroad, please contact us at info@hellobible.org."]
          },
          {
            title: "When does HelloBible ship?",
            answer: ["If you want to receive a HelloBible shipment the same month, you need to subscribe before the 16th of that month. Your first box will then be shipped around the 19th of that month. If you sign up after the 16th, your box will ship around the 19th of the following month. For example, if you order on January 16th, your first HelloBible box will ship around the 19th of January. If you order on January 18th, your first HelloBible box will be shipped around the 19th of February."]
          }
        ]
      }, {
        name: "Managing your Account",
        id: "account",
        items: [
          {
            title: "How can I update my billing information?",
            answer: ['You can update your billing information at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. In there, you will be able to edit your Payment Information and/or Billing Address.']
          },
          {
            title: "How can I update my shipping address?",
            answer: ['You can update your shipping address at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. Shipping addresses must be updated one day before the renewal date which generally is the 1st of each month in order to take effect for that month.']
          }
        ]
      }];

    vm.trackClickedFaqQuestion = function (question) {
      if (hbTracking) {
        Analytics.trackEvent('faq', 'open', question);
      }
    }

  }

})();