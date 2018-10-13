import { Component } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import {Router, NavigationEnd} from "@angular/router";

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloBible - Empowering Families to Grow in Faith';

  constructor(public router: Router) {
    PageScrollConfig.defaultDuration = 500;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
