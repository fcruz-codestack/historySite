import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'gl-ionic-background-video';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HistoryComponent } from './Components/history/history.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HistoryComponent,
    NavBarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
