import { Component, OnInit, isDevMode } from '@angular/core';
import { Gtag } from 'angular-gtag';

declare const fbq: any;
declare const zE: any;

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqs: Array<Object>;

  constructor(gtag: Gtag) {
    this.faqs = [
      {
        name: "General",
        id: "general",
        items: [
          {
            title: "What is HelloBible?",
            answer: [
              "HelloBible is a set of monthly Christian subscription boxes for kids ages 3+. Each box provides a book, creative art projects, fun activities, and parent guides to explore one Bible story every month.",
              "HelloBible currently provides two different subscriptions: <b>HelloBible Junior (ages 3-5)</b> and <b>HelloBible Kids (ages 5-10)</b>."
            ]
          },
          {
            title: "What is included?",
            answer: [
              "Both, HelloBible Junior and HelloBible Kids, come with one Bible storybook, engaging parent guides and multidisciplinary activities to dig deeper into the content of a Bible story. All materials for amazing Bible-based art projects are included.",
              "Visit our <a href='/stories'>Bible Stories page</a> for examples."
            ]
          },
          {
            title: "How does my HelloBible subscription give back?",
            answer: ["HelloBible has an awesome partnership with The Kilgoris Project to support their great work in Kenya. This project educates and feeds children of a Maasai village in southwest Kenya. They work with local leaders and families to operate schools, as well as provide children with food and clean water.",
              "With each HelloBible subscription you purchase, we make a donation to The Kilgoris Project. Teach your child the importance of giving. Together we can make a difference in the life of a child in Kilgoris! "]
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
            title: "How can I give feedback?",
            answer: ["We'd love to hear from you! Please <a target='_blank' href='https://hellobible2.zendesk.com/hc/en-us/requests/new'>contact us</a>."]
          }
        ]
      },
      {
        name: "HelloBible Kids (Ages 5-10)",
        id: "kids",
        items: [
          {
            title: "What is HelloBible Kids?",
            answer: [
              "HelloBible Kids is a monthly Christian subscription for elementary kids ages 5-10. Each box provides a book, creative art projects, fun activities, and parent guides to explore one Bible story every month. You may add materials for up to 4 children.",
              "Grow in faith together and help your children thrive in their relationships with Jesus!"
            ]
          },
          {
            title: "Who is Danny the Donkey?",
            answer: ["Danny the Donkey is the HelloBible Kids mascot. He's a little helper who takes the kids on their journey through the Bible. He welcomes, explains the crafts, and knows a lot of great Bible Verses.",
              "Donkeys are humble and often serving behind the scenes. In the Bible, donkeys are often mentioned and considered to be reliable helpers. The New Testament tells us that Jesus entered Jerusalem on a donkey while the crowd worshipped him. Why did Jesus ride on an unimportant donkey instead of a mighty horse on such an important occasion? This shows that Jesus is a humble king; nobody needs to be perfect in order to serve Jesus. Danny the Donkey reminds us that we are important to Jesus and that He wants to use us."]
          },
          {
            title: "What is the suggested age range for HelloBible Kids?",
            answer: ["HelloBible is designed for elementary kids ages 5-10."]
          },
          {
            title: "Can HelloBible Kids be used for homeschooling?",
            answer: [
              "HelloBible Kids is great for homeschooling elementary children (ages 5-10).",
              "You can find more at <a href='/homeschool'>6 Reasons Why HelloBible Kids is Great for Homeschooling</a>."
            ]
          },
          {
            title: "How does HelloBible Kids work for multiple children in a family?",
            answer: ["During the checkout process for HelloBible Kids, you select the number of material sets you need - one for each child. The story book is a part of a group discussion, so only one copy is included per box."]
          },
        ]
      },
      {
        name: "HelloBible Junior (Ages 3-5)",
        id: "junior",
        items: [
          {
            title: "What is HelloBible Junior?",
            answer: [
              "HelloBible Junior is a monthly Christian subscription for preschoolers ages 3-5. Each box comes with a Bible story book, creative crafts and games, easy-to-follow directions, and all material needed that can be shared between two children. This is great for parents or older siblings to craft along!",
              "Grow in faith together and help your children thrive in their relationships with Jesus!",
            ]
          },
          {
            title: "Who is Bella the Butterfly?",
            answer: ["Bella the Butterfly is the HelloBible Junior mascot. She likes long flies on the beach. Picnics with her friends in flower gardens. Bella loves all things colorful! Especially rainbows. But most of all, Bella loves Jesus. Her favorite thing in the world to do is to share His story with preschoolers.",
              "Butterflies are a symbol of Jesus' resurrection. Every butterfly starts out as a little caterpillar. The caterpillar forms a chrysalis around itself and stays there for several weeks. When it comes out, it is no longer a caterpillar. It has changed into a beautiful butterfly! The chrysalis is like the cave where Jesus was buried for three days. Then He rose from the dead.",
              "Bella the Butterfly reminds us that we have new live in Jesus!"]
          },
          {
            title: "What is the suggested age range for HelloBible Junior?",
            answer: ["HelloBible is designed for preschoolers ages 3-5."]
          },
          {
            title: "How does HelloBible Junior work for multiple children in a family?",
            answer: ["Each HelloBible Junior box comes with craft materials that can be shared between two people. This is great to use for two preschoolers. It also provides a great opportunity to craft along with a parent, grandparent, or older sibling."]
          },
        ]
      },
      {
        name: "Faith",
        id: "beliefs",
        items: [
          {
            title: "What is your Statement of Faith?",
            answer: ["We believe the Bible is the inspired, authoritative Word of God.",
              "We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
              "We believe in the deity of Jesus Christ, in his virgin birth, in his sinless life, in his death on the cross, in his bodily resurrection, in his ascension to the right hand of the Father, and in his personal return.",
              "We believe people receive forgiveness of sins and eternal life through Jesus."]
          },
          {
            title: "What version of the Bible do you use?",
            answer: ["The monthly included storybook is from the Arch Book Series, which paraphrases the Bible story. In addition, we encourage families to read the Bible story in their Children's Bible as well. Bible verses in the activity guides are based on the NIV Bible."]
          },
          {
            title: "Does HelloBible align with my beliefs?",
            answer: ["Our content is Bible based. We focus on Scripture and share suggestions on how to teach Bible stories to children. These ideas and suggestions are designed to apply to a broad range of Christian families and homeschool groups. If you have any questions please do not hesitate to <a target='_blank' href='https://hellobible2.zendesk.com/hc/en-us/requests/new'>contact us</a>."]
          },
        ]
      },
      {
        name: "Subscription",
        id: "subscription",
        items: [
          {
            title: "How does the monthly subscription work?",
            answer: ["When you sign up for a monthly subscription, you will get one HelloBible shipment each month. You will be billed on the 11th of each month and can cancel at any time."]
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
            answer: ["HelloBible is a wonderful gift! During the checkout, please provide your gift recipient’s name and address in the shipping section at checkout."]
          },
          {
            title: "Do you accept returns?",
            answer: ["HelloBible shipments are not returnable or refundable. However, if any materials are missing or damaged please <a target='_blank' href='https://hellobible2.zendesk.com/hc/en-us/requests/new'>contact us</a>. We will be happy to replace those."]
          },
          {
            title: "What if there is a problem with my order?",
            answer: ["We want all customers to enjoy HelloBible. If there is any problem, please <a target='_blank' href='https://hellobible2.zendesk.com/hc/en-us/requests/new'>contact us</a>."]
          },
          {
            title: "How can I cancel a subscription?",
            answer: ['If you choose to cancel your subscription, you must do so by contacting customer support by submitting your request to support@hellobible.org, live chat or call us at (503) 395-2556 during normal business hours, Monday - Friday 9am - 5pm EST. Your Cancellation will take effect at the end of your current subscription cycle.  If you are in the middle of a 6 or 12-month subscription, you can cancel anytime, but please note that canceling your subscription will not automatically issue a refund or cancel future shipments.']
          }
        ]
      }, {
        name: "Shipping",
        id: "shipping",
        items: [
          {
            title: "Where does HelloBible ship?",
            answer: ["We ship anywhere in the United States, including Hawaii and Alaska. If you’d like us to ship abroad, please <a target='_blank' href='https://hellobible2.zendesk.com/hc/en-us/requests/new'>contact us</a>."]
          },
          {
            title: "When does HelloBible ship?",
            answer: ["Boxes generally (including new orders) ship around the 2nd of each month. A shipping confirmation email will be sent to you when a box is shipped."]
          }
        ]
      }, {
        name: "Account",
        id: "account",
        items: [
          {
            title: "How can I update my billing information?",
            answer: ['You can update your billing information at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. There, you can edit your payment information and/or billing address.']
          },
          {
            title: "How can I update my shipping address?",
            answer: ['You can update your shipping address at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. Shipping addresses must be updated one day before the renewal date which generally is the 11th of each month in order to take effect for that month.']
          }
        ]
      }];
  }

  ngOnInit() {
  }

  openWebWidget = function () {
    zE('webWidget', 'open');
  }

  trackClickedFaqQuestion = function (question) {
    if (!isDevMode()) {
      fbq('track', 'ViewContent', {
        content_name: 'faq',
        content_id: question.title
      });
      this.gtag.event('faq', {
        event_category: 'faq',
        event_label: question.title
      });
    }
  }
}
