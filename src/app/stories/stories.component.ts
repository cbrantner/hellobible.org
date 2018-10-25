import { Component, OnInit, isDevMode } from '@angular/core';

declare const fbq: any;

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (!isDevMode()) {
      fbq('track', 'ViewContent', {
        content_name: 'story'
      });
    }
  }

}
