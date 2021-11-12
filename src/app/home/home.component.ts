import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { ActivatedRoute } from '@angular/router';

declare const fbq: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private gtag: Gtag;
  public selectedOptions: object;
  public message: string = "";
  private sub: any;
  private params: any = {};
  private utm_campaign: string = "";

  private campaigns = {
    "a56d739d32-GIFT_EMAIL_2018_11_15": "1 Month FREE. 6 months subscription for one child $99. Use code GIFT6.<br/>3 Months FREE. 12 months subscription for one child $178. Use code GIFT12.",
    "christmas": "Order today and get $5 OFF your Christmas Box. Use code CHRISTMAS5.",
    //"default": "Sold out of Christmas boxes. Order your January box today - Shipping out on January 2nd. All subscriptions come with a special printable card for under-the-tree gifting. Use code CHRISTMAS5 to get $5 off."
    //"default": "Order today and get $5 OFF. Use code VDAY19."
    "default": "Kids home from school? Get $10 off any subscription. Use code HOME10."
  }

  constructor(gtag: Gtag, private route: ActivatedRoute) {
    this.gtag = gtag;
  }

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(params => {
      this.utm_campaign = params.utm_campaign;
      if (this.utm_campaign) {
        var message: string = this.campaigns[this.utm_campaign];
        if (message) {
          this.message = message;
        } else {
          this.message = this.campaigns.default;
        }
      } else {
        this.message = this.campaigns.default;
      }
      Object.assign(this.params, params);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
