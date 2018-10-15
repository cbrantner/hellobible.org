import { Directive, Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Directive({
  selector: '[appNewsletter]'
})
@Component({
  selector: '[appNewsletter]',
  template: `foo`
})
export class NewsletterDirective {

  constructor() { }

}
