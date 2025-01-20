import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home' , pathMatch :'full' , title : "Home Page"},
    {path : "home" , component : HomeComponent , title : "Home Page"},
    {path : 'about' ,component : AboutComponent , title : "About Page"},
    {path : 'contact', component : ContactComponent , title : "Contact Page"},
    {path : 'portfolio', component : PortfolioComponent , title : "Portfolio Page"},
    {path : '**' , component : NotfoundComponent , title : "Not Found Page"}
];
