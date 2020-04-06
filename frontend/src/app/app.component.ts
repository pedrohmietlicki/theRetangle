import { Component } from '@angular/core';
import {ChatService} from '../chat.service'
import {faPaperPlane ,faHome,faComment,faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'The Retangle';
  imagePath:'/assets/miniatura.jpg'
  message:string;
  usuario:string;
  messages:string [] = [];
  faPaperPlane = faPaperPlane;
  faHome = faHome;
  faComment = faComment;
  faUser = faUser;

  constructor(private ChatService: ChatService){

  }
  sendMessage(){
    
    this.ChatService.sendMessage({usuario:"Pedro" , mensagem:this.message});
    this.message = '';
  }
  ngOnInit(){
    this.ChatService
    .getMessages()
    .subscribe((message:string)=>{
      this.messages.push(message)
      console.log(message)
    })
  }
  
}
