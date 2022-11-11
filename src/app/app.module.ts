import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumLinkComponent } from './album-link/album-link.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { LibraryService } from './library.service';
import { RandomComponent } from './pages/random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumLinkComponent,
    HomeComponent,
    AddComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "random", component: RandomComponent},
      {path: "add", component: AddComponent},
      {path: "", component: HomeComponent}
    ])
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
