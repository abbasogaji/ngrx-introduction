import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectTeamBlueUsers } from 'src/app/store';

@Component({
  selector: 'app-team-blue',
  templateUrl: './team-blue.component.html',
  styleUrls: ['./team-blue.component.scss']
})
export class TeamBlueComponent implements OnInit {

  teamBlueUsers$ = this.store.select(selectTeamBlueUsers)
  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
