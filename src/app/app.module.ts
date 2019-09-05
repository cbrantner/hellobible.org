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
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ToastaModule } from 'ngx-toasta';
import { NoahComponent } from './noah/noah.component';
import { ChristmasComponent } from './christmas/christmas.component';
import { FishersOfMenComponent } from './fishers-of-men/fishers-of-men.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';


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
    NewsletterComponent,
    NoahComponent,
    ChristmasComponent,
    FishersOfMenComponent,
    AffiliatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgbModule.forRoot(),
    GtagModule.forRoot({ trackingId: 'UA-82839547-1', trackPageviews: true }),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ToastaModule.forRoot()
  ],
  exports: [BrowserModule, ToastaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
