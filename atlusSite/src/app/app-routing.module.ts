import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HistoryComponent } from './Components/history/history.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
