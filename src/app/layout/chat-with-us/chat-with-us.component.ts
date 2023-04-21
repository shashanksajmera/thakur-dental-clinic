import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chat-with-us',
  templateUrl: './chat-with-us.component.html',
  styleUrls: ['./chat-with-us.component.css']
})
export class ChatWithUsComponent {
  prevScrollpos = window.pageYOffset;
  @HostListener('window:scroll', ['$event']) onScroll(event : any){
    // console.log('Srolled')
    
    // console.slog(this.prevScrollpos);
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementsByClassName("chat-button")[0];
  if (this.prevScrollpos > currentScrollPos) {
    navbar.setAttribute('style' , 'bottom : 5%')
  } else {
    navbar.setAttribute('style' , 'bottom : -5%');
  }
  this.prevScrollpos = currentScrollPos;
  // console.log(this.prevScrollpos);
}
}
