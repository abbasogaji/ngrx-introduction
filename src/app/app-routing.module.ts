import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamBlueComponent } from './pages/team-blue/team-blue.component';
import { TeamGreenComponent } from './pages/team-green/team-green.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "team-blue-users", component : TeamBlueComponent },
  {path : "team-green-users", component : TeamGreenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
