import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, selectUsers } from 'src/app/store';
import * as userActions from '../../store/user/user.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name !: string;
  email !: string;
  team !: string;

  users$ = this.store.pipe(select(selectUsers))
  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  saveUser(){
      this.store.dispatch(userActions.addNewUser({ newUser : { name : this.name, email : this.email, team : this.team} }))
      this.clearForm()
      
  }

  clearForm(){
    this.name = null;
    this.email = null;
    this.team = null;
  }

}
