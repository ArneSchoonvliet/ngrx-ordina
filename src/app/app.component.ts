import { Component, OnInit } from '@angular/core';
import { AppState } from "./store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as io from 'socket.io-client';
import * as Message from './store/actions/message.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private url = 'http://localhost:5000';
  private socket;
  message: string;

  messages$: Observable<Array<string>>;
  constructor(private store: Store<AppState>){
    this.messages$ = store.select('message');
  }

  sendMessage(message){
    this.socket.emit('add-message', message);
    this.message = '';
  }

  ngOnInit(): void {
    this.socket = io(this.url);
    this.socket.on('message', (data: string) => {
      this.store.dispatch(new Message.AddMessage(data))
    })
  }
}
