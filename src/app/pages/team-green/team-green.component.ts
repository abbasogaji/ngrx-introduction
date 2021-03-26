import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectTeamGreenUsers } from 'src/app/store';

@Component({
  selector: 'app-team-green',
  templateUrl: './team-green.component.html',
  styleUrls: ['./team-green.component.scss']
})
export class TeamGreenComponent implements OnInit {

  teamGreenUsers$ = this.store.select(selectTeamGreenUsers)
  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
