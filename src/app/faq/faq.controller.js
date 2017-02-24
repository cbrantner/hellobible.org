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
            answer: ["HelloBible is a monthly christian subscription for kids ages 4 and older. It is a fun way to explore the Bible. Each box includes a Bible storybook, crafts and ideas to share and pray. HelloBible is an awesome opportunity to spend valuable family time."]
          },
          {
            title: "What’s included in my box?",
            answer: ["HelloBible takes children on a journey through the Bible in a fun & creative way. Each box is designed by moms and teachers and is based on a specific Bible story. It comes with an age-appropriate Bible storybook, creative craft projects and various ideas to share and pray. All materials and instructions are included."]
          },
          {
            title: "What is the suggested age range for a box?",
            answer: ["HelloBible is designed for kids ages 4 and older. Sometimes a younger child may need more help of the parents, whereas, an older child can already do more steps by himself."]
          },
          {
            title: "Does HelloBible align with my beliefs?",
            answer: ["Our content is Bible based. We focus on Scripture and we share suggestions on how to teach Bible Stories to children. We hope that those ideas and suggestions apply to a broad range of christian families. If you have any questions please do not hesitate to contact us."]
          },
          {
            title: "Who is Danny the Donkey?",
            answer: ["Danny the Donkey is our little helper who takes the kids on their journey through the Bible. He welcomes, explains the crafts and knows a lot of great Bible Verses.",
              "Donkeys are humble and often serving behind the scenes. In the Bible donkeys are constantly mentioned and considered reliable helpers to the humans. The New Testament tells us that Jesus entered Jerusalem on a donkey while the crowd worshipped him. Why did Jesus ride on an unimportant donkey instead of a mighty horse in such an important occasion? This shows that Jesus is a humble king, nobody needs to be perfect in order to serve Jesus. Let's all be reminded by Danny the Donkey, that we are important to Jesus and that he wants to use us."]
          },
          {
            title: "What is The Kilgoris Project?",
            answer: ["The Kilgoris Project educates and feeds the children of a Masaai village in southwest Kenya. They work Hand-in-Hand with local leaders and families to operate schools, provide daily food and clean water, and Foster economic development. We happend to get to know the founders of The Kilgoris Project. We love what they do and want to support their great work in Kenya. So we started an awesome partnership. For every HelloBible subscription purchased, we donate to this wonderful project. Every box/pack helps the children in Kenya. "]
          },
          {
            title: "How can I support HelloBible?",
            answer: ["Thanks for your interest in HelloBible. There are many ways to support us: <ul>" +
              "<li>Pray for us.</li>" +
              "<li>Tell your family, friends, your church about HelloBible.</li>" +
              "<li>Share us on <a href='https://www.facebook.com/hellobible.org/'>Facebook</a>, <a href='http://www.instagram.com/hellobiblebox/'>Instagram</a>, or <a href='http://www.pinterest.com/hellobible'>Pinterest</a>.</li>"
              ]
          }
        ]
      }, {
            title: "How can I give feedback?",
            answer: ["We love to hear from you! Please send us an email to info@hellobible.org."]
          }, {
        name: "Subscription",
        id: "subscription",
        items: [
          {
            title: "How does the monthly subscription work?",
            answer: ["When you sign up for a monthly subscription, you will get one HelloBible shipment each month. You will be billed on the 24th of each month and can cancel at any time."]
          },
          {
            title: "How does the 6 or 12 months subscription work?",
            answer: ["When you sign up for a 6 or 12 months subscription, you will get one HelloBible shipment each month for the duration of your subscription. You will pay the entire subscription upfront. The subscriptions will renew automatically."]
          },
          {
            title: "What happens at the end of my subscription?",
            answer: ["Subscriptions will automatically renew at the end of the subscription period. That's great because you will never miss a box! We will send you a reminder email one day before the automatic renewal. If you do not cancel after receiving the reminder email, it will renew for the same number of months as the term that was originally purchased."]
          },
          {
            title: "How can I give HelloBible as a gift?",
            answer: ["HelloBible is a wonderful gift! Just go to our Order Now page and choose between a monthly, a 6-, or a 12-months subscription. Kid’s love to receive mail. Therefore all our subscriptions come addressed to the child. Please provide your gift recepient’s name and address in the shipping section at checkout. Then your gift will be on it’s way soon."]
          },
 {
            title: "How will the child know the HelloBible gift is from me?",
            answer: ["All our subscriptions come addressed to the child. So the gift giver will be a surprise."]
          },          {
            title: "Do you accept returns?",
            answer: ["Our HelloBible boxes and packs are not returnable. However, if any materials in your box or in your pack are missing or damaged please contact us at info@hellobible.org. We will be happy to replace those."]
          },
          {
            title: "What if there is a problem with my order?",
            answer: ["We want all customers to enjoy HelloBible. If there is any problem, please contact us at info@hellobible.org."]
          },
          {
            title: "How can I cancel a subscription?",
            answer: ['If, for any reason, you decided to leave us, you can cancel your subscription in your <a href="http://hellobible.cratejoy.com/customer/login">account</a>. Please note, subscriptions can’t be canceled mid-term. All Cancellations need to be received one day before the automatic renewal which generally is the 24th of each month.']
          }
        ]
      }, {
        name: "Shipping",
        id: "shipping",
        items: [
          {
            title: "Where do HelloBible boxes ship?",
            answer: ["We ship our boxes anywhere in the United States, including Hawaii and Alaska. If you’d like us to ship abroad, please contact us at info@hellobible.org."]
          },
          {
            title: "How much does shipping cost?",
            answer: ["Shipping is $5 per box and $3 per pack within the United States. For example, for the 6 month premium box subscription term, $30 shipping will be added at checkout. For the 6 month basic pack subscription term, $18 will be added at checkout."]
          },
          {
            title: "When does HelloBible ship?",
            answer: ["If you want to receive a HelloBible shipment the same month, you need to subscribe before the 10th of that month. Your first box/pack will then ship between the 15th and the 19th of the same month. If you sign up after the 10th, your box/pack will ship between the 15th and the 19th of the following month. For example, if you order on January 9th, your first HelloBible box/pack will ship between the 15th and the 19th of January. If you order on January 11th, your first HelloBible box/pack will be shipped between the 15th and the 19th of February."]
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
            answer: ['You can update your shipping address at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. Shipping addresses must be updated one day before the renewal date which generally is the 24th of each month in order to take effect for that month.']
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