import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { TeamGreenComponent } from './pages/team-green/team-green.component';
import { TeamBlueComponent } from './pages/team-blue/team-blue.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamGreenComponent,
    TeamBlueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ user : userReducer}),
    EffectsModule.forRoot([UserEffects]),
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
