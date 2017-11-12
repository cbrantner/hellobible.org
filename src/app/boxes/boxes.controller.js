(function () {
  'use strict';

  angular
    .module('hellobible')
    .controller('BoxesController', BoxesController);


  /** @ngInject */
  function BoxesController(Analytics, hbTracking) {
    var vm = this;

    vm.stories = [
      {
        name: "The Christmas Story",
        id: "christmas",
        image: "christmas.jpeg",
        verse: "Today in the town of David a Savior has been born to you: He is the Messiah, the Lord.",
        location: "Luke 2:11",
        text1: "Talk about the Christmas Story and learn more about Jesus and why we really celebrate Christmas.",
        book: "Baby Jesus Is Born.",
        lessons: [
          {
            name: "Jesus is born",
            bible: "Learn about Mary and Joseph’s journey to Bethlehem and about Jesus being born in a stable.",
            art: "Make your own nativity scene."
          },
          {
            name: "Let your light shine",
            bible: "Talk about the importance of light. Embrace Jesus who is the light and what this means for us today.",
            art: "Craft a beautiful Christmas light."
          }
        ],
        text2: "Video: Watch our video about Christmas."
      },
      {
        name: "The Easter Story",
        id: "easter",
        image: "easter.jpeg",
        verse: "For God so loved the world, that he gave his son, that whoever believes in him should not perish but have eternal life.",
        location: "John 3:16",
        text1: "Why are we celebrating Easter? Let’s explore more about the Easter week and the days that led to Jesus resurrection.",
        book: "The Days That Led To Easter.",
        lessons: [
          {
            name: "JESUS died and rose again",
            bible: "Find out why Jesus had to died on the cross and pay for our sins.",
            art: "Paint a light ray easter cross. This empty cross shall remind you that Jesus defeats death. He is our Savior!"
          },
          {
            name: "Easter, a time of renewal and awakening",
            bible: "God raised Jesus from the death. He gives me new life, too.",
            art: "Plant sunflower seeds as a symbol of the resurrection and help the seeds grow into a beautiful sunflower."
          }
        ],
        text2: "You can watch the unboxing video with Eline."
      },
      {
        name: "The Story of Creation",
        id: "creation",
        image: "creation.jpeg",
        verse: "In the beginning, God created the heavens and the earth.",
        location: "Genesis 1:1",
        text1: "Get to know more about the awesome world God created.",
        book: "The Story Of Creation.",
        lessons: [
          {
            name: "God saw that everything was very good",
            bible: "Be reminded that God created you special and that he loves you like you are!",
            art: "Craft a special picture frame."
          },
          {
            name: "Care for Gods creation",
            bible: "Think and pray about what you could do for God’s wonderful creation.",
            art: "Paint a colorful cotton bag and use it for your grocery shopping."
          }
        ]
      },
      {
        name: "The Story of Noah",
        id: "noah",
        image: "noah.jpeg",
        verse: "I will put my rainbow in the clouds to be a sign of my promise to the earth.",
        location: "Genesis 9:13",
        text1: "Discover the exciting Story of Noah and his Ark.",
        book: "A Man Named Noah.",
        lessons: [
          {
            name: "Noah builds the ark",
            bible: "Explore how God sent a huge flood to the earth but he saved Noah, his family and the animals.",
            art: "Build Noah’s ark and an awesome matching game. Help Noah to bring two of all the animals into the Ark. "
          },
          {
            name: "God’s promise",
            bible: "Learn about the promise God made to Noah that he never sends such a flood again. The rainbow is the sign of God’s promise. Trust God, he keeps his promises.",
            art: "Make giant bubbles and watch out for rainbow refections."
          }
        ],
        text2: "Watch our fun Video about Noah and the animals."
      },
      {
        name: "The Story of Abraham",
        id: "abraham",
        image: "abraham.jpeg",
        verse: "Now look toward the heavens and count the stars. And he said to him “so shall your descendants be.“",
        location: "Genesis 15:5",
        text1: "Get to know more about Abraham and Sarah. Do you know that Abraham means “father of many nations”? Do you know if your name has a special meaning?",
        book: "Abraham, Sarah and Isaac.",
        lessons: [
          {
            name: "God called Abraham",
            bible: "Discover how God called Abraham. Although he was already very old, God promised him as many descendants as stars in the sky.",
            art: "Craft a shiny star garland and be reminded that God always keeps his promises."
          },
          {
            name: "Abraham trusted God",
            bible: "Can you imagine if God asked you and your Family to leave behind everything that was familiar to you? What would you do?",
            art: "Make your own prayer journal and write down important thoughts and prayers."
          }
        ]
      },
      {
        name: "The Story of Joseph",
        id: "joseph",
        image: "joseph.jpeg",
        verse: "The Lord was with Joseph and he became a successful man.",
        location: "Genesis 39:2",
        text1: "Get ready to meet Joseph and his eleven brothers",
        book: "Joseph, Jacob’s Favorite Son.",
        lessons: [
          {
            name: "Jacob, Joseph and his brothers",
            bible: "Did you know Joseph had a wonderful coat with many colors? His father Jacob gave it to him. But his eleven brothers were jealous and tried to get rid of Joseph. They sold him to Egyptian merchants.",
            art: "Make your own story magnets and play the story of Joseph."
          },
          {
            name: "Joseph forgives his brothers",
            bible: "God was with Joseph. God had a greater plan to save his people from the famine. Joseph understood and forgave his brothers.",
            art: "Paint a wooden bank and take on a project challenge to collect money to donate to a good cause."
          }
        ]
      },
      {
        name: "The Story of Moses",
        id: "moses",
        image: "moses.jpeg",
        verse: "God said to Moses “I am who I am”.",
        location: "Exodus 3:14",
        text1: "Be ready to meet Mose and learn about his exciting story",
        book: " Tiny Baby Moses.",
        lessons: [
          {
            name: "God saved Moses",
            bible: "Moses mother put him in a basket on the river Nil to protect him from the egyptians. Learn how God saved Moses",
            art: "In those days baskets were handmade. Grab your reed and get the chance to weave your own basket."
          },
          {
            name: "God called Moses",
            bible: "One day, Moses saw a burning bush but the bush did not burn up. He stepped closer to take a look. Get to know what happened next.",
            art: "Moses met God. Paint Moses and the burning bush using marbles art."
          }
        ]
      },
      {
        name: "The Story of Joshua",
        id: "joshua",
        image: "joshua.jpeg",
        verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
        location: "Joshua 1:9",
        text1: "Be loud! Blow your trumpet like Joshua",
        book: "Jericho’s Tumbling Walls",
        lessons: [
          {
            name: "Joshua fought the battle of Jericho",
            bible: "Have you ever heard of Jericho? It was an important city and it was pretty hard to fight. A great and mighty wall surrounded the city so nobody could get in. Discover how Joshua and the Israelites trusted God and the walls fell.",
            art: "Decorate and blow the trumpet. But be careful, it will get loud."
          },
          {
            name: "Rahab helps the spies",
            bible: "Get to know more about Rahab. Learn why Rahab and her family were the only people who survived in Jericho",
            art: "Make a board game and have fun playing and marching around the city of Jericho."
          }
        ]
      },
      {
        name: "The Story of Ruth and Naomi",
        id: "naomi",
        image: "ruth.jpeg",
        verse: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.",
        location: "Ruth 1:16",
        text1: "Meet two courages women and friends: Ruth and Naomi.",
        book: "Ruth and Naomi.",
        lessons: [
          {
            name: "Ruth stays with Naomi",
            bible: "Ruth was loyal to Naomi, she stayed with her. Naomi was able to count on Ruth. God wants us to be someone others can count on. What does this mean?",
            art: "Make a hand feather ball and play with it. Note that it will always turn around and never fall feathers first. You can count on this fact."
          },
          {
            name: "God cares for Ruth and Naomi",
            bible: "This story is about trust and friendship. Ruth trusted God and she followed her friend Naomi back to Israel. God cared for them.",
            art: "Decorate fun friendship bracelets and give one two your best friend."
          }
        ]
      },
      {
        name: "The Story of David",
        id: "david",
        image: "david.jpeg",
        verse: "The battle is the Lord’s.",
        location: "1 Samuel 17:47",
        text1: "Did you know David was a shepherd boy and a talented musician? Learn more about David and his battle with Goliath, the giant.",
        book: "One Boy, One Stone, one God: The Story of David and Goliath.",
        lessons: [
          {
            name: "David the shepherd boy",
            bible: "David guided his flock to new areas of land, so they would have fresh grass and water. David knew that God was with him all the time.",
            art: "Be a shepherd like David and and make your own flock of sheep. Take care of your flock and play Tic, Tac, Toe with them."
          },
          {
            name: "David and Goliath",
            bible: "David asked King Saul to let him fight against Goliath, a 9 feet tall giant. Do you want to know if David defeated Goliath.",
            art: "Be brave like David. Craft your own ball aiming game and try to aim as good as David."
          }
        ]
      },
      {
        name: "The Story of Daniel",
        id: "daniel",
        image: "daniel.jpeg",
        verse: "So Daniel was taken out of the den, and no wound was found on him, for he had trusted in his God.",
        location: "Daniel 6:23",
        text1: "Daniel was a trustworthy and faithful man. Let’s learn more about his story and how God protected him.",
        book: "Daniel and the lions.",
        lessons: [
          {
            name: "Daniel was trustworthy and faithful",
            bible: "Daniel trusted God and stayed faithful in prayer even though it was dangerous.",
            art: "Tie a lion pillow and be reminded to be brave like Daniel."
          },
          {
            name: "God protected Daniel",
            bible: "Learn how God protected Daniel when he was thrown into the lions' den.",
            art: "Make a night-light lighthouse and remember to trust God like Daniel."
          }
        ]
      }
    ];

    vm.trackClickedFaqQuestion = function (story) {
      if (hbTracking) {
        Analytics.trackEvent('stories', 'open', story);
      }
    }
  }

})();
