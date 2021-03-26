import { createAction, props } from "@ngrx/store";
import { User } from "./user.reducers";

export const addNewUser = createAction(
    "[Home Page] add new user",
    props<{ newUser : User}>()
)