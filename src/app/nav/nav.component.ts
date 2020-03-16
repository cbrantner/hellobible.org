import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit, OnDestroy {
  public isCollapsed = false;
  public message: string = "";
  private sub: any;

  private campaigns = {
    "a56d739d32-GIFT_EMAIL_2018_11_15": "1 Month FREE. 6 months subscription for one child $99. Use code GIFT6.<br/>3 Months FREE. 12 months subscription for one child $178. Use code GIFT12.",
    "christmas": "Order today and get $5 OFF your Christmas Box. Use code CHRISTMAS5.",
    "gethellobible": "Congratulations, you have unlocked your offer. Use code GETHELLOBIBLE.",
    "default": "Kids home from school? Get $10 off any subscription. Use code EASTER."
    //"default": "Sold out of Christmas boxes. Order your January box today - Shipping out on January 2nd. All subscriptions come with a special printable card for under-the-tree gifting. Use code CHRISTMAS5 to get $5 off."
    //"default": "Order today and get $5 OFF. Use code VDAY19."
  }
  
  constructor(public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      var utm: string = params.utm_campaign;
      var next: string = params.next;
      if (utm) {
        var message: string = this.campaigns[utm];
        if (message) {
          this.message = message;
        } else {
          this.message = this.campaigns.default;
        }
      } else if (next) {
        this.message = this.campaigns.gethellobible;
      } else {
        this.message = this.campaigns.default;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
