import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('readmore') readmorebut?:ElementRef = undefined;

  readMore:boolean = false;

  onClick(){
    
    this.readMore = !this.readMore;
    console.log(this.readMore);
  }

  
}
