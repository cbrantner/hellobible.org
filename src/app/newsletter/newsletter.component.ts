import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  submitting: boolean;
  response: boolean;

  url: string = '//hellobible.us11.list-manage.com/subscribe/post-json';

  actions = {
    'save': {
      method: 'jsonp'
    }
  };


  constructor() { }

  ngOnInit() {
  }

  addSubscriber(mailchimp) {


    var params = {
      u: '241bb925118b3a87d221f6dca',
      id: 'afc638b89c',
      EMAIL: mailchimp.email,
      c: 'JSON_CALLBACK'
    };

  }

}
