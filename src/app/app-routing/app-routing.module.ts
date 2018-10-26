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

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'faq',
        component: FaqsComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'faqs',
        component: FaqsComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'stories',
        component: StoriesComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'homeschool',
        component: HomeschoolComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'terms',
        component: TermsComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        data: {
            title: 'Example of static route data'
        }
    },
    {
        path: 'kilgoris',
        component: KilgorisComponent,
        data: {
            title: 'Example of static route data'
        }
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
    
