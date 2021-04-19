import { Component, OnInit } from '@angular/core';
import { SeoService } from './seo';
import {PageScrollConfig} from 'ngx-page-scroll';
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Gtag } from 'angular-gtag';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloBible - Empowering Families to Grow in Faith';
  
  constructor(public router: Router, gtag: Gtag, private activatedRoute: ActivatedRoute, private seoService: SeoService) {
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    });
}
}
