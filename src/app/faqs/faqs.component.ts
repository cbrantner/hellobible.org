import { Component, OnInit, isDevMode } from '@angular/core';
import { Gtag } from 'angular-gtag';

declare const fbq: any;

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
              "HelloBible is a monthly Christian subscription for kids ages 5+. Each box provides a book, creative art projects, fun activities, and parent guides to explore one Bible story every month. You may add materials for up to 4 children.",
              "Grow in faith together and help your children thrive in relationship with Jesus!"
            ]
          },
          {
            title: "What is included?",
            answer: [
              "It comes with one Bible storybook, engaging parent guides and multidisciplinary activities to dig deeper into the content of a Bible story. All materials for amazing bible-based art projects are included.",
              "Visit our <a href='/stories'>Bible Stories page</a> for examples."
            ]
          },

          {
            title: "Who is Danny the Donkey?",
            answer: ["Danny the Donkey is our little helper who takes the kids on their journey through the Bible. He welcomes, explains the crafts and knows a lot of great Bible Verses.",
              "Donkeys are humble and often serving behind the scenes. In the Bible donkeys are constantly mentioned and considered reliable helpers to the humans. The New Testament tells us that Jesus entered Jerusalem on a donkey while the crowd worshipped him. Why did Jesus ride on an unimportant donkey instead of a mighty horse in such an important occasion? This shows that Jesus is a humble king, nobody needs to be perfect in order to serve Jesus. Let's all be reminded by Danny the Donkey, that we are important to Jesus and that he wants to use us."]
          },
          {
            title: "What is the suggested age range for HelloBible?",
            answer: ["HelloBible is designed for kids ages 5-10."]
          },
          {
            title: "Is HelloBible donating?",
            answer: ["Yes. We started an awesome partnership with The Kilgoris Project to support their great work in Kenya. This project educates and feeds children of a Masaai village in southwest Kenya. They work with local leaders and families to operate schools, provide daily food and clean water.",
              "For each HelloBible subscription, we donate to <a href='/kilgoris'>The Kilgoris Project</a>. Teach your child the importance of giving: Together we can make a difference in the life of a child in Kilgoris! "]
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
            title: "How does HelloBible work for multiple children?",
            answer: ["During the checkout process, you can select the number of material sets you need - one for each child. The book is supposed to be a group activity and only one book is included per box."]
          },
          {
            title: "Can HelloBible be used for homeschooling?",
            answer: [
              "HelloBible is great for homeschooling elementary children (ages 5-10).",
              "You can find more at <a href='/homeschool'>6 Reasons Why HelloBible is Great for Homeschooling</a>."
            ]
          },
          {
            title: "What if I need material for more than 4 children?",
            answer: ["That's great. No problem. Please contact us at info@hellobible.org and we will be happy to help you."]
          },
          {
            title: "How can I give feedback?",
            answer: ["We'd love to hear from you! Please send us an email to info@hellobible.org."]
          }
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
            answer: ["We are using the Arch Book Series. There is one book included in each box. In addition, we encourage families to read the Bible story in their Children's Bible as well. Other Verses and box inserts are based on the NIV Bible."]
          },
          {
            title: "Does HelloBible align with my beliefs?",
            answer: ["Our content is Bible based. We focus on Scripture and we share suggestions on how to teach Bible Stories to children. We hope that those ideas and suggestions apply to a broad range of Christian families and homeschool groups. If you have any questions please do not hesitate to contact us."]
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
            answer: ["HelloBible is a wonderful gift! During the checkout, please provide your gift recipient’s name and address in the shipping section at checkout. You can also leave a personalized note for the recipient."]
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
            answer: ['If, for any reason, you decided to leave us, you can cancel your subscription in your <a href="http://hellobible.cratejoy.com/customer/login">account</a>. Please note, subscriptions can’t be canceled mid-term. All Cancellations need to be received one day before the automatic renewal which generally is the 11th of each month.']
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
            answer: ["Your first shipment will be sent within a week of receiving the order. Going forward, boxes will ship around the 4th of each month. A shipping confirmation email will be sent to you when a box was shipped."]
          }
        ]
      }, {
        name: "Account",
        id: "account",
        items: [
          {
            title: "How can I update my billing information?",
            answer: ['You can update your billing information at any time from your <a href="http://hellobible.cratejoy.com/customer/login">Account page</a>. In there, you will be able to edit your Payment Information and/or Billing Address.']
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

  trackClickedFaqQuestion = function (question) {
    if (!isDevMode()) {
      fbq('track', 'ViewContent', {
        content_name: 'faq',
        content_id: question.title
      });
      this.gtag.event('faq_opened', {
        event_category: 'faq',
        event_label: question.title
      });
    }
  }
}
