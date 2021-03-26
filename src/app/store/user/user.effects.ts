import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SnotifyService } from "ng-snotify";
import * as userActions from './user.actions';
import { exhaustMap, tap } from 'rxjs/operators'

@Injectable()
export class UserEffects{
    constructor(
        private snotifyService: SnotifyService,
        private actions$ : Actions
        ){}

    addNewUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(userActions.addNewUser),
            tap(() => {
                this.snotifyService.success("User Created Succesfully")
            }),
            exhaustMap(() => [])
        )
    )
}