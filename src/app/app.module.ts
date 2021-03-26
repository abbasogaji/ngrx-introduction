import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { TeamGreenComponent } from './pages/team-green/team-green.component';
import { TeamBlueComponent } from './pages/team-blue/team-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    TeamGreenComponent,
    TeamBlueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ user : userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
