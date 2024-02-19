import { Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: '', component: HomePageComponent },
    // { path: '**', component: },
    {
        path: 'capital',
        loadChildren: () => import('./countries/country.routes').then((m) => m.countryRoutes),
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/country.routes').then((m) => m.countryRoutes),
    },

    {
        path: 'by-country-Page',
        loadChildren: () => import('./countries/country.routes').then((m) => m.countryRoutes),
    },
    {
        path: 'region',
        loadChildren: () => import('./countries/country.routes').then((m) => m.countryRoutes),
    },

];