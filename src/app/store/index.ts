import { Action, ActionReducerMap } from "@ngrx/store";
import { messageReducer } from "./reducers/message.reducer";

export interface AppState {
  message : Array<string>;
}


export const reducers : ActionReducerMap<AppState> = {
  message: messageReducer
}
