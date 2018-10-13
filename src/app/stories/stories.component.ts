import { Component, OnInit } from '@angular/core';

declare const fbq: any;

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    fbq('track', 'ViewContent', {
      content_name: 'story'
    });
  }

}
