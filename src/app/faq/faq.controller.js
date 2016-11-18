(function() {
  'use strict';

  angular
    .module('hellobible')
    .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController() {

    var vm = this;
    
    vm.faq = [
      {
        category : "General",
        open : true,
        content :[
          {
            title : "What is HelloBible?",
            answer : "HelloBible is a monthly christian subscription box. Kids explore a Bible story at home including a book, crafts and ideas to share and pray. HelloBible takes you on a journey through the Bible in a fun & creative way! It is an awesome opportunity to spend valuable family time."
          }
        ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "What’s included in my box?",
          answer : "HelloBible takes children on a journey through the Bible. Each box is designed by experts and is based on a specific Bible story. It comes with an age-appropriate Bible storybook, two creative craft projects and various ideas to share and pray. All materials and instructions are included."
        }
       ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "What is the suggested age range for a box?",
          answer : "HelloBible is designed for kids ages 5-8."
        }
       ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "When will I be able to order?",
          answer : "Very soon. Meanwhile, please sign up to our email list to get the latest news, discounts and be the first to know when we launch."
        }
       ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "Does HelloBible align with my beliefs?",
          answer : "Our content is Bible based. We focus on Scripture and we share suggestions on how to teach Bible Stories to children. We hope that those ideas and suggestions apply to a broad range of christian families. If you have any questions please do not hesitate to contact us."
        }
      ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "Who is Danny the Donkey?",
          answer : "Danny the Donkey is our little helper who takes the kids on their journey through the Bible. He welcomes, explains the crafts and knows a lot of great Bible Verses.Donkeys are humble and often serving behind the scenes. In the Bible donkeys are constantly mentioned and considered reliable helpers to the humans. The New Testament tells us that Jesus entered Jerusalem on a donkey while the crowd worshipped him. Why did Jesus ride on an unimportant donkey instead of a mighty horse in such an important occasion? This shows that Jesus is a humble king, nobody needs to be perfect in order to serve Jesus.Let's all be reminded by Danny the Donkey, that we are important to Jesus and that he wants to use us."
        }
      ]
      },
      {
      category : "General",
      open : false,
      content :[
        {
          title : "How can I support HelloBible?",
          answer : "You like HelloBible? There are many ways to support us."
        }
      ]
      }
    ];

  }
})();
