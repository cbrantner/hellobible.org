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
import { CampComponent } from '../camp/camp.component';
import { CampExclusivesComponent } from '../camp-exclusives/camp-exclusives.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            seo: {
                title: 'HelloBible - The #1 Christian Subscription box for kids!',
                metaTags: [
                    { name: 'description', content: 'HelloBible is a monthly Christian subscription box for kids ages 3-10. Explore Bible stories each month with a book, creative art projects and fun activities!' },
                    { property: 'og:title', content: 'HelloBible - The #1 Christian Subscription box for kids!' },
                    { proprety: 'og:description', content: 'HelloBible is a monthly Christian subscription box for kids ages 3-10. Explore Bible stories each month with a book, creative art projects and fun activities!' }
                ]
            }
        }
    },
    {
        path: 'faq',
        component: FaqsComponent,
        data: {
            seo: {
                title: 'Everything you need to know about joining HelloBible!',
                metaTags: [
                    { name: 'description', content: 'We are here to help, ask us a question or browse our frequently asked questions.' },
                    { property: 'og:title', content: 'Everything you need to know about joining HelloBible!' },
                    { proprety: 'og:description', content: 'We are here to help, ask us a question or browse our frequently asked questions.' }
                ]
            }
        }
    },
    {
        path: 'faqs',
        component: FaqsComponent,
        data: {
            seo: {
                title: 'Everything you need to know about joining HelloBible!',
                metaTags: [
                    { name: 'description', content: 'We are here to help, ask us a question or browse our frequently asked questions.' },
                    { property: 'og:title', content: 'Everything you need to know about joining HelloBible!' },
                    { proprety: 'og:description', content: 'We are here to help, ask us a question or browse our frequently asked questions.' }
                ]
            }
        }
    },
    {
        path: 'stories',
        component: StoriesComponent,
        data: {
            seo: {
                title: 'Take a look inside at all the fun you could have with HelloBible!',
                metaTags: [
                    { name: 'description', content: 'HelloBible boxes are filled with activities that empower families to grow in faith together, with parent guides included, this box is perfect for the whole family!' },
                    { property: 'og:title', content: 'Take a look inside at all the fun you could have with HelloBible!' },
                    { proprety: 'og:description', content: 'HelloBible boxes are filled with activities that empower families to grow in faith together, with parent guides included, this box is perfect for the whole family!' }
                ]
            }
        }
    },
    {
        path: 'homeschool',
        component: HomeschoolComponent,
        data: {
            seo: {
                title: 'HelloBible is a great resource for homeschooling - Learn more',
                metaTags: [
                    { name: 'description', content: 'With curriculum & parent guides sent to you in each box, HelloBible makes homeschool Bible Study fun & easy for the whole family!' },
                    { property: 'og:title', content: 'HelloBible is a great resource for homeschooling - Learn more' },
                    { proprety: 'og:description', content: 'With curriculum & parent guides sent to you in each box, HelloBible makes homeschool Bible Study fun & easy for the whole family!' }
                ]
            }
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            seo: {
                title: 'Read how the #1 kids Christian box came to be.',
                metaTags: [
                    { name: 'description', content: 'HelloBible founder, Connie, created HelloBible for Christian families to learn about The Bible, grow in faith, and thrive in their relationship with Jesus.' },
                    { property: 'og:title', content: 'Read how the #1 kids Christian box came to be.' },
                    { proprety: 'og:description', content: 'HelloBible founder, Connie, created HelloBible for Christian families to learn about The Bible, grow in faith, and thrive in their relationship with Jesus.' }
                ]
            }
        }
    },
    {
        path: 'camp/exclusive',
        component: CampExclusivesComponent
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
        component: KilgorisComponent,
        data: {
            seo: {
                title: 'Each HelloBible subscription helps send kids to school.',
                metaTags: [
                    { name: 'description', content: 'HelloBible members help provide education for children in Kilgoris, Kenya. Click to read more about Hellobible’s partnership with The Kilgoris Project.' },
                    { property: 'og:title', content: 'Each HelloBible subscription helps send kids to school.' },
                    { proprety: 'og:description', content: 'HelloBible members help provide education for children in Kilgoris, Kenya. Click to read more about Hellobible’s partnership with The Kilgoris Project.' }
                ]
            }
        }
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
        data: {
            seo: {
                title: 'Free coloring download from HelloBible.',
                metaTags: [
                    { name: 'description', content: 'Download our Gospel postcard booklet, color, & send them to someone you love. For activities like this & more, join HelloBible today!' },
                    { property: 'og:title', content: 'Free coloring download from HelloBible.' },
                    { proprety: 'og:description', content: 'Download our Gospel postcard booklet, color, & send them to someone you love. For activities like this & more, join HelloBible today!' }
                ]
            }
        }
    },
    {
        path: 'camp',
        component: CampComponent,
        data: {
            seo: {
                title: 'HelloBible Summer Camp in a Box.',
                metaTags: [
                    { name: 'description', content: 'Join us on an amazing Bible adventure this summer! HelloBible Summer Camp in a Box includes a camp schedule, amazing crafts and fun activities.' },
                    { property: 'og:title', content: 'HelloBible Summer Camp in a Box.' },
                    { proprety: 'og:description', content: 'Join us on an amazing Bible adventure this summer! HelloBible Summer Camp in a Box includes a camp schedule, amazing crafts and fun activities.' }
                ]
            }
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

