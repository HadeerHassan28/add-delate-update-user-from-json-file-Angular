import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './components/error/error.component';
import { HomeComponentn } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/add/add.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponentn,
    HeaderComponent,
    AddComponent,
    UserDetailComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
