import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'converter', component: ConverterComponent},
    {path: 'about', component: AboutComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];
