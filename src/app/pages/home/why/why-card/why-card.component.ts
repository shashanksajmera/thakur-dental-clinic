import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-card',
  templateUrl: './why-card.component.html',
  styleUrls: ['./why-card.component.css']
})
export class WhyCardComponent {
@Input() title:string | undefined;
@Input() content: string | undefined;

 isReadMore:boolean = false;

 onClick(){
    
  this.isReadMore = !this.isReadMore;
  console.log(this.isReadMore);
}

}
