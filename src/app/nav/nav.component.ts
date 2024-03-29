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
    "default": "HelloBible is taking a little break right now as we make some changes to our structure. If you’re a subscriber, check your email for an update. If you’d like to subscribe to HelloBible, don’t go far – we’ll be back soon!"
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
      } else {
        this.message = this.campaigns.default;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
