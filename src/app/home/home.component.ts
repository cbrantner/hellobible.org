import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subscription } from 'rxjs-compat';
import { Gtag } from 'angular-gtag';

declare const fbq: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private future: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  public launchCountdown: string;
  private gtag: Gtag;

  constructor(gtag: Gtag) {
    this.gtag = gtag;
  }

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + ' days',
      hours + ' hours'/*,
      minutes + 'm',
      seconds + 's'*/
    ].join(' ');
  }

  ngOnInit() {
    this.future = new Date("2018-11-02T00:00:00-09:00");
    this.counter$ = Observable.interval(1000).map((x) => {
      return Math.floor((this.future.getTime() -  new Date().getTime()) / 1000);
    });

    this.subscription = this.counter$.subscribe((x) => this.launchCountdown = this.dhms(x));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToCart(plan) {

    var selectedOptions = {
      monthlyPlan: "1",
      sixMonthsPlan: "1",
      twelveMonthsPlan: "1"
    };

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

    var selected = selectedOptions[plan];
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
