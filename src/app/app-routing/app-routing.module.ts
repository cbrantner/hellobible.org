import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { StoriesComponent } from '../stories/stories.component';
import { AboutComponent } from '../about/about.component';
import { TermsComponent } from '../terms/terms.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { KilgorisComponent } from '../kilgoris/kilgoris.component';
import { HomeschoolComponent } from '../homeschool/homeschool.component';
import { NoahComponent } from '../noah/noah.component';
import { ChristmasComponent } from '../christmas/christmas.component';
import { FishersOfMenComponent } from '../fishers-of-men/fishers-of-men.component';
import { NoahJuniorComponent } from '../noah-junior/noah-junior.component';
import { AffiliatesComponent } from '../affiliates/affiliates.component';
import { PostcardsComponent } from '../postcards/postcards.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'faq',
        component: FaqsComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    {
        path: 'stories',
        component: StoriesComponent
    },
    {
        path: 'homeschool',
        component: HomeschoolComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'kilgoris',
        component: KilgorisComponent
    },
    {
        path: 'noah',
        component: NoahComponent,
    },
    {
        path: 'christmas',
        component: ChristmasComponent,
    },
    {
        path: 'fishers-of-men',
        component: FishersOfMenComponent,
    },
    {
        path: 'noah-junior',
        component: NoahJuniorComponent,
    },
    {
        path: 'affiliates',
        component: AffiliatesComponent,
    },
    {
        path: 'postcards',
        component: PostcardsComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
    
