import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputchat',
  templateUrl: './inputchat.component.html',
  styleUrls: ['./inputchat.component.css']
})
export class InputchatComponent implements OnInit {

  private _chat: String;


  /*public getChat():String{
    return this._chat;
  }
  public setChat(chat:String){
    this._chat=chat;
  }*/

  constructor() { }

  ngOnInit() {
    this._chat="Pikatchu";
  }

}