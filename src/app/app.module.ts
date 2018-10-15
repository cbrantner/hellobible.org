import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoriesComponent } from './stories/stories.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { KilgorisComponent } from './kilgoris/kilgoris.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeschoolComponent } from './homeschool/homeschool.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { GtagModule } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FaqsComponent,
    HomeComponent,
    StoriesComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    KilgorisComponent,
    HomeschoolComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgbModule,
    GtagModule.forRoot({ trackingId: 'UA-82839547-1', trackPageviews: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
