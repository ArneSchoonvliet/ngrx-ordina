import { Action } from "@ngrx/store";
import * as MessageActions from "../actions/message.actions";
import { AppState } from "../index";

export function messageReducer(state: Array<string> = [], action: MessageActions.All): Array<string>{
  switch(action.type){
    case MessageActions.ADD_MESSAGE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
