import { Component } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent {
  why_cards = [
    {
      title:'Highly Trained and Qualified Dental Team',readmore:''
  },{
    title:'Advanced Dental Treatment Procedures and Equipments',readmore:''
},{
  title:'Extensive Range of Dental Services',readmore:''
},{
  title:'Visible Results and Radiant Smiles',readmore:''
},];
  why_card = 'card2';
}
