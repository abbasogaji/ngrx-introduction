import { createReducer, on } from "@ngrx/store"
import * as userActions from './user.actions';

export const initialState : UserState = {
    users : null
}
export interface User{
    name : string;
    email : string;
    team : string;
}

export interface UserState {
        users : User[] | null
}

export const _userReducer = createReducer(initialState, 
    on(userActions.addNewUser, (state, {newUser}) => ({...state, users : state.users ? [...state.users, newUser] : [newUser]}))
)

export function userReducer(state, action){
    return _userReducer(state, action)
}

