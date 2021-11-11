import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { ActivatedRoute } from '@angular/router';

declare const fbq: any;

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  private gtag: Gtag;
  public selectedOptions: object;
  public message: string = "";
  private sub: any;
  private params: any = {};
  private utm_campaign: string = "";
  private explorerOptions =
  {
    explorerMonthlyPlan:
      { price: "29.80", url: "https://hellobible.cratejoy.com/subscribe/3453405312_hellobible-explorer/3453405308_month-to-month" },
    explorerSixMonthsPlan:
      { price: "172.80", url: "https://hellobible.cratejoy.com/subscribe/3453405312_hellobible-explorer/3453405310_6-month-prepay" },
    explorerTwelveMonthsPlan:
      { price: "321.60", url: "https://hellobible.cratejoy.com/subscribe/3453405312_hellobible-explorer/3453405311_12-month-prepay" }
  };
  private juniorOptions =
    {
      juniorMonthlyPlan:
        { price: "29.80", url: "https://hellobible.cratejoy.com/subscribe/2939044309_hellobible-junior/2939044310_month-to-month" },
      juniorSixMonthsPlan:
        { price: "172.80", url: "https://hellobible.cratejoy.com/subscribe/2939044309_hellobible-junior/2939044312_6-month-prepay" },
      juniorTwelveMonthsPlan:
        { price: "321.60", url: "https://hellobible.cratejoy.com/subscribe/2939044309_hellobible-junior/2939044313_12-month-prepay" }
    };


  public juniorMonthlyTotal = this.juniorOptions['juniorMonthlyPlan'].price;
  public juniorSixMonthsTotal = this.juniorOptions['juniorSixMonthsPlan'].price;
  public juniorTwelveMonthsTotal = this.juniorOptions['juniorTwelveMonthsPlan'].price;

  public explorerMonthlyTotal = this.explorerOptions['explorerMonthlyPlan'].price;
  public explorerSixMonthsTotal = this.explorerOptions['explorerSixMonthsPlan'].price;
  public explorerTwelveMonthsTotal = this.explorerOptions['explorerTwelveMonthsPlan'].price;

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
  this.selectedOptions = {
    monthlyPlan: "1",
    sixMonthsPlan: "1",
    twelveMonthsPlan: "1"
  };

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

addToCartExplorer(plan) {

  var planObject = this.explorerOptions[plan];

  var url = planObject.url;
  var i = 0;
  for (var key in this.params) {
    if (this.params.hasOwnProperty(key)) {
      var sep = i === 0 ? "?" : "&";
      url += sep + key + "=" + this.params[key];
      ++i;
    }

  }

  if (!isDevMode()) {
    this.gtag.event('cart', {
      event_label: 'add ' + planObject.url,
      value: planObject.price
    });
  }

  // redirect
  window.location.href = url;
}



addToCartJunior(plan) {

  var planObject = this.juniorOptions[plan];

  var url = planObject.url;
  var i = 0;
  for (var key in this.params) {
    if (this.params.hasOwnProperty(key)) {
      var sep = i === 0 ? "?" : "&";
      url += sep + key + "=" + this.params[key];
      ++i;
    }

  }

  if (!isDevMode()) {
    this.gtag.event('cart', {
      event_label: 'add ' + planObject.url,
      value: planObject.price
    });
  }

  // redirect
  window.location.href = url;
}

}
