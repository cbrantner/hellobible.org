import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import {Router, NavigationEnd} from "@angular/router";
import { Gtag } from 'angular-gtag';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloBible - Empowering Families to Grow in Faith';
  
  constructor(public router: Router, gtag: Gtag) {
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}
}
