import { createSelector } from "@ngrx/store";
import { UserState } from "./user/user.reducers";

export interface AppState {
    user: UserState;
}

export const selectUser = (state: AppState) => state.user;
export const selectUsers = createSelector(selectUser, (state: UserState) => state.users);
export const selectTeamBlueUsers = createSelector(selectUser, (state: UserState) => state.users.filter(v => v.team == "TEAM_BLUE"))
export const selectTeamGreenUsers = createSelector(selectUser, (state: UserState) => state.users.filter(v => v.team == "TEAM_GREEN"))