import { Component, OnInit, isDevMode } from '@angular/core';
import { NewsletterSubscriber } from '../newsletter-subscriber';
import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http';
import { ToastaService, ToastaConfig, ToastOptions } from 'ngx-toasta';

interface MailChimpResponse {
  result: string;
  msg: string;
}

declare const fbq: any;

// hack: https://github.com/angular/angular/issues/18261
class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  submitted = false;
  response: boolean;
  model = new NewsletterSubscriber("");

  url: string = 'https://hellobible.us11.list-manage.com/subscribe/post-json?u=241bb925118b3a87d221f6dca&id=afc638b89c&';

  constructor(private toastaService: ToastaService, private toastaConfig: ToastaConfig, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit() {

    const params = new HttpParams({encoder: new CustomEncoder()})
      .set('EMAIL', this.model.email);

    const mailChimpUrl = this.url + params.toString();

    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {

      if (response.result && response.result !== 'error') {
        this.submitted = true;
        this.toastaService.success(response.msg);

        if (!isDevMode()) {
          fbq('trackCustom', 'newsletter', { event: 'signup' });
        }
      }
      else {
        this.toastaService.error(response.msg);
      }
    }, error => {
      this.toastaService.error('Sorry, an error occurred.');
    });
  }

}
