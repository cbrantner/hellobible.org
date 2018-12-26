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

  private campaigns = {
    "a56d739d32-GIFT_EMAIL_2018_11_15": "1 Month FREE. 6 months subscription for one child $99. Use code GIFT6.<br/>3 Months FREE. 12 months subscription for one child $178. Use code GIFT12.",
    "christmas": "Order today and get $5 OFF your Christmas Box. Use code CHRISTMAS5.",
    //"default": "Sold out of Christmas boxes. Order your January box today - Shipping out on January 2nd. All subscriptions come with a special printable card for under-the-tree gifting. Use code CHRISTMAS5 to get $5 off."
    "default": "Order today. Next box ships January 2nd."
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
      var utm: string = params.utm_campaign;
      if (utm) {
        var message: string = this.campaigns[utm];
        if (message) {
          this.message = message;
        } else {
          this.message = this.campaigns.default;
        }
      } else {
        this.message = this.campaigns.default;
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart(plan) {

    var option =
    {
      monthlyPlan:
      {
        children: [
          { price: "22.90", url: "https://hellobible.cratejoy.com/subscribe/1786138185_hellobible-1child/1786138181_month-to-month" },
          { price: "27.80", url: "https://hellobible.cratejoy.com/subscribe/1786151870_hellobible-2children/1786151871_month-to-month" },
          { price: "32.70", url: "https://hellobible.cratejoy.com/subscribe/1786157882_hellobible-3children/1786157878_month-to-month" },
          { price: "37.60", url: "https://hellobible.cratejoy.com/subscribe/1786158776_hellobible-4children/1786158772_month-to-month" }
        ]
      },
      sixMonthsPlan:
      {
        children: [
          { price: "131.40", url: "https://hellobible.cratejoy.com/subscribe/1786138185_hellobible-1child/1786138183_6-month-prepay" },
          { price: "160.80", url: "https://hellobible.cratejoy.com/subscribe/1786151870_hellobible-2children/1786151873_6-month-prepay" },
          { price: "190.20", url: "https://hellobible.cratejoy.com/subscribe/1786157882_hellobible-3children/1786157880_6-month-prepay" },
          { price: "219.60", url: "https://hellobible.cratejoy.com/subscribe/1786158776_hellobible-4children/1786158774_6-month-prepay" }
        ]
      },
      twelveMonthsPlan:
      {
        children: [
          { price: "238.80", url: "https://hellobible.cratejoy.com/subscribe/1786138185_hellobible-1child/1786138184_12-month-prepay" },
          { price: "297.60", url: "https://hellobible.cratejoy.com/subscribe/1786151870_hellobible-2children/1786151874_12-month-prepay" },
          { price: "356.40", url: "https://hellobible.cratejoy.com/subscribe/1786157882_hellobible-3children/1786157881_12-month-prepay" },
          { price: "415.20", url: "https://hellobible.cratejoy.com/subscribe/1786158776_hellobible-4children/1786158775_12-month-prepay" }
        ]
      }
    };

    var selected = this.selectedOptions[plan];
    var planObject = option[plan];
    var url = planObject.children[parseInt(selected) - 1].url;

    if (!isDevMode()) {
      fbq('track', 'AddToCart', {
        content_name: plan + ' ' + selected + ' children',
        value: planObject.children[parseInt(selected) - 1].price,
        currency: "USD",
        content_id: planObject.children[parseInt(selected) - 1].url
      });

      this.gtag.event('cart', {
        event_label: 'add ' + planObject.children[parseInt(selected) - 1].url,
        value: planObject.children[parseInt(selected) - 1].price
      });
    }

    // redirect
    window.location.href = url;
  }

}
